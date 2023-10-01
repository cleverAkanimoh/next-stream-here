import React from "react";
import { useGlobalContext } from "@/context/store";
import { Spinner } from "@chakra-ui/react";

export default function Signup() {

	const { setLoginBtn } = useGlobalContext();

	const [submiting, setSubmiting] = React.useState(false);
	const [error, setError] = React.useState(false);

	const [User, setUser] = React.useState({
		name: '',
		lastname: '',
		email: '',
		category: '',
		password: '',
		confirmPassword: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.target
		setUser({
			...User,
			[name]: value
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setSubmiting(true)

		if (User.password !== User.confirmPassword) {
			setError(true)
			setSubmiting(false)
			return;
		}

		try {
			const { data } = await axios.post("/api/register", { name: User.name, email: User.email, password: User.password })
			
			console.log(data);
			

			setSubmiting(false)
			setLoginBtn(true)

		} catch (err) {
			console.log('error message: please check your internet connection')
			setSubmiting(false)
		} finally {
			setSubmiting(false)
			setError(false)
		}

	}

	return (
		<>
			<h1 className="text-[1.95rem] font-bold">Sign up <span className="text-[2.1rem] text-secondary font-extrabold">Today!</span></h1>

			<p className={`${error ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} text-center w-full h-fit text-red-600 transition-all`}>Invalid Credentials</p>

			<form onSubmit={handleSubmit} method="post" className="signup-form">
				<input
					name="name"
					type="text"
					placeholder="Name"
					className="signup-input rounded-tl-[6px]"
					required
					value={User.name}
					onChange={handleChange}
				/>

				<input
					name="lastname"
					type="text"
					placeholder="Last Name"
					className="signup-input rounded-tr-[6px] border-l-0"
					required
					value={User.lastname}
					onChange={handleChange}
					disabled
				/>

				<input
					name="email"
					type="email"
					placeholder="Email Address"
					className="signup-input col-span-2 border-t-0"
					required
					value={User.email}
					onChange={handleChange}
				/>

				<aside className="h-12 flex flex-wrap flex-shrink items-center justify-center gap-2 col-span-2 border-x border-line shadow-md" >

					<h1>Sign up as:</h1>

					<div className="flex items-center justify-center gap-4 capitalize">
						<div className="category-btn">

							<input
								type="radio"
								name="category"
								id="landlord"
								value="landlord"
								onChange={handleChange}
								disabled
							/>&nbsp;

							<label className="category-label" htmlFor="landlord">Landlord</label>

						</div>

						<div className="category-btn">

							<input
								type="radio"
								name="category"
								id="agent"
								value="agent"
								onChange={handleChange}
								disabled

							/>&nbsp;

							<label className="category-label" htmlFor="agent">Agent</label>

						</div>

						<div className="category-btn">

							<input
								type="radio"
								name="category"
								id="client"
								value="client"
								onChange={handleChange}
								defaultChecked
								disabled
							/>&nbsp;

							<label className="category-label" htmlFor="client">Client</label>

						</div>
					</div>

				</aside>

				<input
					name="password"
					type="password"
					placeholder="Password"
					className="signup-input rounded-bl-[6px]"
					required
					value={User.password}
					onChange={handleChange}
				/>

				<input
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
					className="signup-input rounded-br-[6px] border-l-0"
					required
					value={User.confirmPassword}
					onChange={handleChange}
				/>

				<button className={`${submiting ? "bg-opacity-40 cursor-not-allowed pointer-events-none" : ""} hover:bg-opacity-50`}>
					{submiting ? <Spinner /> : "sign up"}
				</button>
			</form>
		</>
	);
}
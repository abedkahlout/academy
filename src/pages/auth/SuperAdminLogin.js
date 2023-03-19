import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successLogin } from "../../redux/superadminSlice";

export default function SuperAdminLogin() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const error = useRef(null);
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_API}/api/admin/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return Promise.reject(res.json());
				}
			})
			.then((info) => {
				dispatch(successLogin({ super: info }));
				navigate("/superadmin");
				setLoading(false);
			})
			.catch((err) => {
				err.then((e) => {
					error.current.textContent = e.message;
				});
				setLoading(false);
			});
	};

	useEffect(() => {
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}, []);

	return (
		<div className="student-login container">
			<div className="register-top">
				
				<div className="register-process-wrapper">
					<form onSubmit={handleSubmit(onSubmit)} className="register-form">
						<div className="form-input-wrapper">
							<label className="input-title">البريد الاكتروني</label>
							<input
								type={"email"}
								{...register("email", { required: "البريد الالكتروني مطلوب" })}
								className="input"
							/>
							<span style={{ color: "red" }}>{errors.email?.message}</span>
						</div>
						<div className="form-input-wrapper">
							<label className="input-title"> كلمة المرور </label>
							<input
								type={"password"}
								{...register("password", { required: "كلمة المرور مطلوبة" })}
								className="input"
							/>
							<span style={{ color: "red" }}>{errors.password?.message}</span>
						</div>
					
						<span ref={error} style={{ color: "red" }}></span>
						<button style={{ opacity: loading ? 0.5 : 1 }} className="register-btn">
							{loading ? "جاري التسجيل..." : "تسجيل الدخول"}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

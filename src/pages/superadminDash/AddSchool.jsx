import { useForm } from "react-hook-form";

import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Layout from "../../components/superadminDash/Layout";
import { useNavigate } from "react-router";
// api/admin/registerPrivateSchool

function AddSchool() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
	const [levels, setLevels] = useState([]);
	const [classes, setClasses] = useState([]);
	const [sections, setSections] = useState([]);
	const [school, setSchool] = useState([]);
	const navigate = useNavigate();
	const error = useRef(null);

	const onSubmit = (data) => {
		console.log(data);
		setLoading(true);

		fetch(`${process.env.REACT_APP_API}/api/admin/registerPrivateSchool`, {
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
				error.current.textContent = "";
				setLoading(false);
			})
			.catch((err) => {
				err.then((e) => {
					error.current.textContent = e.message;
				});
				setLoading(false);
			});
	};

	return (
		<div>
			<Layout>
				<form onSubmit={handleSubmit(onSubmit)} className="register-form">
					<TextField
						fullWidth
						id="outlined-basic"
						label="الايميل "
						variant="outlined"
						{...register("email", { required: "هذا الحقل مطلوب" })}
						sx={{ my: 1 }}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="كلمة السر"
						variant="outlined"
						{...register("password", { required: "هذا الحقل مطلوب" })}
						sx={{ my: 2 }}
					/>
					<TextField
						fullWidth
						id="outlined-basic"
						label="اسم المدرسة"
						variant="outlined"
						{...register("name", { required: "هذا الحقل مطلوب" })}
						sx={{ my: 2 }}
					/>

					<FormGroup sx={{ mt: 2 }}>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="الدورات"
							{...register("course", {
								required: "هذا الحقل مطلوب",
							})}
						/>
						<FormControlLabel
							{...register("group", {
								required: "هذا الحقل مطلوب",
							})}
							control={<Checkbox />}
							label="المجموعات"
						/>
						<FormControlLabel
							{...register("forum", {
								required: "هذا الحقل مطلوب",
							})}
							control={<Checkbox />}
							label="المنتديات "
						/>
						<FormControlLabel
							{...register("lesson", {
								required: "هذا الحقل مطلوب",
							})}
							control={<Checkbox />}
							label="الدروس المرئية"
						/>
						<FormControlLabel
							{...register("psycho", {
								required: "هذا الحقل مطلوب",
							})}
							control={<Checkbox />}
							label="الاخصائي النفسي "
						/>
					</FormGroup>
					<button
						style={{
							backgroundColor: "#18A0FB",
							padding: 10,
							borderRadius: 6,
							marginTop: 20,
							color: 'white',
							width: '250px',
						}}
					>
						 سجل الان
					</button>
					<span ref={error} style={{ color: "red" }}></span>

				</form>
			</Layout>
		</div>
	);
}

export default AddSchool;

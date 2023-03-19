import React from "react";
import Layout from "../../components/superadminDash/Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";

const Text = styled("h3")({});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#18A0FB",
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

export default function ExamReveal() {
	const [load, setLoad] = useState(true);
	const [exams, setExams] = useState([]);
	const test = useSelector((state) => state.super.superSlice);
	useEffect(() => {
		async function getExams() {
			setLoad(true);
			try {
				const response = await fetch(
					`${process.env.REACT_APP_API}/api/privateSchool/all`,
					{
						headers: {
							Authorization: test.token,
						},
					}
				);
				if ((response.status !== 200) & (response.status !== 201)) {
					throw new Error("failed occured");
				}
				const data = await response.json();
				setLoad(false);
				setExams(data);
			} catch (err) {
				setLoad(false);
				console.log(err);
			}
			setLoad(false);
		}
		getExams();
	}, []);

	console.log(exams);
	return (
		<Layout>
			<Text sx={{ marginBottom: "15px", fontSize: "22px" }}>كشف المدارس</Text>
			<Box
				sx={{
					overflowX: "auto",
					maxWidth: { md: "100%", xs: "100%", margin: "auto" },
				}}
			>
				<Table sx={{ width: "100%" }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell TableCell>الاسم </StyledTableCell>
							<StyledTableCell TableCell>الايميل </StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{load ? (
							<StyledTableRow>
								<StyledTableCell colSpan={8}>
									<Box sx={{ display: "flex" }}>
										<CircularProgress />
									</Box>
								</StyledTableCell>
							</StyledTableRow>
						) : exams?.privateSchools?.length > 0 ? (
							exams?.privateSchools?.map((item, index) => {
								return (
									<StyledTableRow key={index}>
										<StyledTableCell component="th" scope="row">
											{item.name}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row">
											{item.email}
										</StyledTableCell>
									</StyledTableRow>
								);
							})
						) : (
							<StyledTableRow>
								<StyledTableCell colSpan={8}>لا يوجد اختبارات متاحة</StyledTableCell>
							</StyledTableRow>
						)}
					</TableBody>
				</Table>
			</Box>
		</Layout>
	);
}

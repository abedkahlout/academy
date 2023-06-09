import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserpagesOutlet from "./pages/user/UserpagesOutlet";
import Home from "./pages/user/home/Home";
import Groups from "./pages/user/groups/Groups";
import Forums from "./pages/user/forums/Forums";
import SingleGropup from "./pages/user/groups/SingleGroup";
import SingleForum from "./pages/user/forums/SingleForum";
import Physchologist from "./pages/user/psychologist/Psychologist";
import PsychologistSessions from "./pages/user/psychologist/PsychologistSessions";
import RequestSession from "./pages/user/psychologist/RequestSession";
import MemberShipsPage from "./pages/user/memberShips/MemberShips";
import GoldenMemberShipPage from "./pages/user/memberShips/GoldenMemberShipPage";
import SilverMemberShipPage from "./pages/user/memberShips/SilverMemberShipPage";
import ReqularMemberShipPage from "./pages/user/memberShips/ReqularMemberShipPage";
import VideoLessons from "./pages/user/videoLessons/VideoLessons";
import VideoLessonsCategory from "./pages/user/videoLessons/VideoLessonsCategory";
import ViewVideoLessonSingle from "./pages/user/videoLessons/ViewSingleLesson";
import PlayerLessonPage from "./pages/user/videoLessons/PlayerLessonPage";
import LessonUrlPage from "./pages/user/videoLessons/LessonUrlPage";
import TeacherRegister from "./pages/auth/TeacherRegister";
import StudentRegister from "./pages/auth/StudentRegister";
import TeacherLogin from "./pages/auth/TeacherLogin";
import StudentLogin from "./pages/auth/StudentLogin";
import ForgotPassword from "./pages/auth/ForgetPassword";
import ParentLogin from "./pages/auth/ParentLogin";
import Courses from "./pages/user/courses/Courses";
import SingleCourse from "./pages/user/courses/SingleCourse";
import LandParentPage from "./pages/parent/LandParentPage";
import ChartPage from "./pages/parent/ChartPage";
import VideoLessonsSearchFound from "./pages/user/videoLessons/VideoLessonsSearchFound";
import VideoLessonsSearchNotFound from "./pages/user/videoLessons/VideoLessonsSearchNotFound";
import MainChartPage from "./pages/parent/MainChartPage";
import HomeStudentDash from "./pages/studentDash/HomeStudentDash.jsx";
import HomeTeacherDash from "./pages/teacherDash/HomeTeacherDash";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExamReveal from "./pages/studentDash/ExamReveal";
import StudentWallet from "./pages/studentDash/StudentWallet";
import StudentCourses from "./pages/studentDash/StudentCourses";
import Lesson from "./pages/user/courses/Lesson";
import TeacherCourses from "./pages/teacherDash/TeacherCourses";
import TeacherUnits from "./pages/teacherDash/TeacherUnits";
import TeacherLessons from "./pages/teacherDash/TeacherLessons";
import TeacherExams from "./pages/teacherDash/TeacherExams";
import TeacherQuestions from "./pages/teacherDash/TeacherQuestions";
import ExamsHome from "./pages/user/exams/ExamsHome";
import MarksHome from "./pages/user/exams/marksHome";
import TeacherGrades from "./pages/teacherDash/TeacherGrades";
import Profile from "./pages/studentDash/Profile";
import ExamQuestions from "./pages/user/exams/ExamQuestions";
import StudentGroups from "./pages/studentDash/StudentGroups";
import GroupLessons from "./pages/user/groups/GroupLessons";
import NotFound from "./NotFound";
import TeacherGroups from "./pages/teacherDash/TeacherGroups";
import TeacherSingleGroup from "./pages/teacherDash/TeacherSingleGroup";
import TeacherGroupLessons from "./pages/teacherDash/TeacherGroupLessons";
import TeacherGroupStudents from "./pages/teacherDash/TeacherGroupStudents";
import NotLogin from "./NotLogin";
import TeacherPsychos from "./pages/teacherDash/TeacherPsychos";
import TeacherSinglePsycho from "./pages/teacherDash/TeacherSinglePsycho";
import SessionManagement from "./pages/teacherDash/TeacherManagmentSession";
import TeacherSessions from "./pages/teacherDash/TeacherSessions";
import StudentSessions from "./pages/studentDash/StudentSessions";
import StudentNotifications from "./pages/studentDash/StudentNotifications";
import ParentHome from "./pages/parentDash/ParentHome";
import AddStudents from "./pages/parentDash/AddStudents";
import ParentViewStudent from "./pages/parentDash/ParentViewStudent";
import ParentRegister from "./pages/auth/ParentRegister";
import TeacherProfile from "./pages/teacherDash/TeacherProfile";
import GroupDetails from "./pages/user/groups/GroupDetails";
import SingleGroupLesson from "./pages/user/groups/SingleGroupLesson";
import ParentNotifications from "./pages/parentDash/ParentNotifications";
import TeacherForums from "./pages/teacherDash/TeacherForums";
import SingleForumStudent from "./pages/user/forums/SingleForumStudent";
import StudentForums from "./pages/studentDash/StudentForums";
import Superadminf from "./pages/superadminDash/superadminf";
import AddSchool from "./pages/superadminDash/AddSchool";
import Schools from "./pages/superadminDash/Schools";
import SuperAdminLogin from "./pages/auth/SuperAdminLogin";

const theme = createTheme({
	direction: "rtl",
	palette: {
		primary: {
			main: "#18A0FB",
			contrastText: "#ffffff",
		},
	},
});

function App() {
	const { currentUser } = useSelector((state) => state.user);
	const { currentTeacher } = useSelector((state) => state.teacher);
	const { currentParent } = useSelector((state) => state.parent);
	const { superSlice } = useSelector((state) => state.super);
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Routes>
					{/** user home page */}
					<Route path="/" element={<UserpagesOutlet />}>
						<Route index element={<Home />} />
						{/** courses section*/}
						<Route
							path="courses"
							element={currentUser ? <Courses /> : <NotLogin />}
						/>
						<Route
							path="courses/:courseId"
							element={currentUser ? <SingleCourse /> : <NotLogin />}
						/>
						<Route
							path="lessons/:lessonId"
							element={currentUser ? <Lesson /> : <NotLogin />}
						/>
						<Route
							path="exams/:examId"
							element={currentUser ? <ExamQuestions /> : <NotLogin />}
						/>
						{/** exams section*/}
						<Route
							path="exams"
							element={currentUser ? <ExamsHome /> : <NotLogin />}
						/>
						<Route
							path="marks"
							element={currentUser ? <MarksHome /> : <NotLogin />}
						/>
						{/** group section */}
						<Route path="groups" element={currentUser ? <Groups /> : <NotLogin />} />
						<Route
							path="groups/:id"
							element={currentUser ? <SingleGropup /> : <NotLogin />}
						/>
						<Route
							path="groups/:id/lessons"
							element={currentUser ? <GroupLessons /> : <NotLogin />}
						/>
						<Route
							path="groups/:id/details"
							element={currentUser ? <GroupDetails /> : <NotLogin />}
						/>
						<Route
							path="group/:groupId/lesson/:lessonId"
							element={currentUser ? <SingleGroupLesson /> : <NotLogin />}
						/>
						{/** membership section */}
						<Route path="memberships" element={<MemberShipsPage />} />
						<Route path="memberships/golden" element={<GoldenMemberShipPage />} />
						<Route path="memberships/silver" element={<SilverMemberShipPage />} />
						<Route path="memberships/regular" element={<ReqularMemberShipPage />} />
						{/** forums section */}
						<Route path="forums" element={<Forums />} />
						<Route
							path="forums/:forumId"
							element={
								currentUser ? (
									<SingleForumStudent />
								) : (
									<Navigate to={"/login/student"} />
								)
							}
						/>
						{/** psychologist section */}
						<Route path="psychologist" element={<Physchologist />} />
						<Route path="psychologist/sessions" element={<PsychologistSessions />} />
						<Route
							path="psychologist/request/:sessionId"
							element={<RequestSession />}
						/>
					</Route>

					{/* login and register routes new */}
					<Route path="register/teacher" element={<TeacherRegister />} />
					<Route path="register/student" element={<StudentRegister />} />
					<Route path="register/parent" element={<ParentRegister />} />
					<Route path="login/teacher" element={<TeacherLogin />} />
					<Route path="login/student" element={<StudentLogin />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="login/parent" element={<ParentLogin />} />

					{/** student dashboard new */}
					<Route
						path="student-dash"
						element={
							currentUser ? <HomeStudentDash /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/examReveal"
						element={
							currentUser ? <ExamReveal /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/studentWallet"
						element={
							currentUser ? <StudentWallet /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/studentCourses"
						element={
							currentUser ? <StudentCourses /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/studentGroups"
						element={
							currentUser ? <StudentGroups /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/studentSessions"
						element={
							currentUser ? <StudentSessions /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="student-dash/studentForums"
						element={
							currentUser ? <StudentForums /> : <Navigate to={"/login/student"} />
						}
					/>
					<Route
						path="profile"
						element={currentUser ? <Profile /> : <Navigate to={"/login/student"} />}
					/>
					<Route
						path="notifications"
						element={
							currentUser ? (
								<StudentNotifications />
							) : (
								<Navigate to={"/login/student"} />
							)
						}
					/>
					{/** super admin dash */}

					<Route
						path="superadmin"
						element={
							superSlice ? <Superadminf /> : <Navigate to={"/login/superadmin"} />
						}
					/>

					<Route path="/login/superadmin" element={<SuperAdminLogin />} />

					<Route
						path="superadmin"
						element={
							superSlice ? <Superadminf /> : <Navigate to={"/login/superadmin"} />
						}
					/>

					<Route
						path="addschool"
						element={
							superSlice ? <AddSchool /> : <Navigate to={"/login/superadmin"} />
						}
					/>

					<Route
						path="schools"
						element={superSlice ? <Schools /> : <Navigate to={"/login/student"} />}
					/>

					{/** end super admin dash */}

					{/** teacher dashboard new */}
					<Route
						path="teacher-dash"
						element={
							currentTeacher ? <HomeTeacherDash /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="teacher-dash/courses"
						element={
							currentTeacher ? <TeacherCourses /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="teacher-dash/groups"
						element={
							currentTeacher ? <TeacherGroups /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="teacher-dash/groups/:id"
						element={
							currentTeacher ? (
								<TeacherSingleGroup />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="teacher-dash/groups/:id/lessons"
						element={
							currentTeacher ? (
								<TeacherGroupLessons />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="teacher-dash/groups/:id/students"
						element={
							currentTeacher ? (
								<TeacherGroupStudents />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="teacher-dash/courses/:courseId"
						element={
							currentTeacher ? <TeacherUnits /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="teacher-dash/courses/:unitId/lessons"
						element={
							currentTeacher ? <TeacherLessons /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="teacher-dash/courses/:courseId/units/:unitId/exams"
						element={
							currentTeacher ? <TeacherExams /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="courses/:courseId/units/:unitId/exams/:examId/questions"
						element={
							currentTeacher ? (
								<TeacherQuestions />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="/exams/:examId/marks"
						element={
							currentTeacher ? <TeacherGrades /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="/teacher-dash/psychos"
						element={
							currentTeacher ? <TeacherPsychos /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="/teacher-dash/psychos/:id"
						element={
							currentTeacher ? (
								<TeacherSinglePsycho />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="/teacher-dash/psychos/:id/sessions"
						element={
							currentTeacher ? (
								<SessionManagement />
							) : (
								<Navigate to={"/login/teacher"} />
							)
						}
					/>
					<Route
						path="/teacher-dash/psychos/:id/sessionsAccepted"
						element={
							currentTeacher ? <TeacherSessions /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="/teacher-dash/profile"
						element={
							currentTeacher ? <TeacherProfile /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="/teacher-dash/forums"
						element={
							currentTeacher ? <TeacherForums /> : <Navigate to={"/login/teacher"} />
						}
					/>
					<Route
						path="/teacher-dash/forums/:forumId"
						element={
							currentTeacher ? <SingleForum /> : <Navigate to={"/login/teacher"} />
						}
					/>

					{/** parent dashboard */}
					<Route
						path="parent-dash"
						element={
							currentParent ? <ParentHome /> : <Navigate to={"/login/parent"} />
						}
					/>
					<Route
						path="parent-dash/add-students"
						element={
							currentParent ? <AddStudents /> : <Navigate to={"/login/parent"} />
						}
					/>
					<Route
						path="parent-dash/student/:id"
						element={
							currentParent ? <ParentViewStudent /> : <Navigate to={"/login/parent"} />
						}
					/>
					<Route
						path="parent-dash/notifications"
						element={
							currentParent ? (
								<ParentNotifications />
							) : (
								<Navigate to={"/login/parent"} />
							)
						}
					/>

					{/** not use pages */}
					<Route path="parent" element={<MainChartPage />}>
						<Route index element={<LandParentPage />} />
						<Route path="chart" element={<ChartPage />} />
					</Route>
					<Route path="videoLessons" element={<VideoLessons />} />
					<Route path="videoLessons/search" element={<VideoLessonsSearchFound />} />
					<Route
						path="videoLessons/search/notFound"
						element={<VideoLessonsSearchNotFound />}
					/>
					<Route
						path="videoLessons/:lessonsType"
						element={<VideoLessonsCategory />}
					/>
					<Route
						path="videoLessons/watch/url/:lessonType/:lessonId"
						element={<LessonUrlPage />}
					/>
					<Route
						path="videoLessons/watch/:lessonType/:lessonId"
						element={<PlayerLessonPage />}
					/>
					<Route
						path="videoLessons/:lessonType/:lessonId"
						element={<ViewVideoLessonSingle />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}
export default App;

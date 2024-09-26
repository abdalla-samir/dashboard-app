import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Body from "../components/body-header";
import CourseCard from "../components/courses-card";
function Courses() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Courses" />
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                        <CourseCard srone="course-01.jpg" srtwo="team-01.png" heading="Mastering Web Design" description="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture" user="950" cost="165" />
                        <CourseCard srone="course-02.jpg" srtwo="team-02.png" heading="Data Structure And Algorithms" description="Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering" user="1150" cost="210" />
                        <CourseCard srone="course-03.jpg" srtwo="team-03.png" heading="Responsive Web Design" description="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints" user="650" cost="90" />
                        <CourseCard srone="course-04.jpg" srtwo="team-05.png" heading="Mastering Python" description="Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life" user="950" cost="250" />
                        <CourseCard srone="course-05.jpg" srtwo="team-04.png" heading="PHP Examples" description="PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases" user="850" cost="150" />
                        <CourseCard srone="course-02.jpg" srtwo="team-02.png" heading="Data Structure And Algorithms" description="Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering" user="1150" cost="210" />
                        <CourseCard srone="course-03.jpg" srtwo="team-03.png" heading="Responsive Web Design" description="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints" user="650" cost="90" />
                        <CourseCard srone="course-01.jpg" srtwo="team-01.png" heading="Mastering Web Design" description="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture" user="950" cost="165" />
                        <CourseCard srone="course-05.jpg" srtwo="team-04.png" heading="PHP Examples" description="PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases" user="850" cost="150" />
                        <CourseCard srone="course-04.jpg" srtwo="team-05.png" heading="Mastering Python" description="Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life" user="950" cost="250" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;
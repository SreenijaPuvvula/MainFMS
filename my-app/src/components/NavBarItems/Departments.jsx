import MainHeading from "../Admin/MainHeading";
import { useLocation } from "react-router-dom";
import Footer from "../Home/Footer";
import "./navItem.css";
function Departments() {
    const location = useLocation();
    const dept = location.state;
    console.log(dept);
    const department = [
        {
            id: "cse",
            name: "DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING",
            head1: {
                name: "Dr A.Vani Vathsala",
                designation: "Professor & Head Of the Department",
                qualification: "Qualification : M.Tech,Ph.D",
                specialisation: "Specialisation : Computer Science",
                img: "images/hod.jpg"
            },
            head2: {
                name: "Prof. L.C. Siva Reddy",
                designation: "Professor of CSE and Vice-Principal",
                qualification: "Qualification :  M.Phil.",
                specialisation: "Specialisation : Computer Networks",
                img: "images/vicePrincipal.jpg"
            }
        },
        {
            id: "it",
            name: "DEPARTMENT OF INFORMATION TECHNOLOGY",
            head1: {
                name: "Dr. Bipin Bihari Jaya Singh",
                designation: "Professor & Head Of the Department",
                qualification: "Qualification : M.Tech,Ph.D",
                specialisation: "Specialisation : Security & Forensics, Data Mining, Cloud Computing",
                img: "https://cvr.ac.in/it/itphotos/bipin.JPG"
            },
            head2: {
                name: "Dr. R. Seetharamaiah",
                designation: "Professor",
                qualification: "M.Sc.(Tech.), M.Phil., Ph.D.",
                specialisation: "Specialisation : Distributed Computing",
                img: "https://cvr.ac.in/it/itphotos/rsr.JPG"
            }
        },
        {
            id: "ece",
            name: "DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING",
            head1: {
                name: "Dr. K Lalithendra",
                designation: "Professor & Head Of the Department",
                qualification: "Qualification : M.Tech,Ph.D",
                specialisation: "Specialisation : Radar and Microwave Engineering",
                img: "https://cvr.ac.in/p/p322713331173803/26220709_1368043156640810_9213722199859298830_o_1368043156640810.jpg"
            },
            head2: {
                name: "Dr. K.S. Nayanathara",
                designation: "Professor",
                qualification: "M.Sc.(Tech.), M.Phil., Ph.D.",
                specialisation: "Specialisation : Microwave & Radar Engineering",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaCzS1fQgMqKt0M7RGvzAHZgyhlNQnplDfdVW8ujNxYgd8VPFmENXQCfSGp3SUbuKjJo&usqp=CAU"
            }
        },
        {
            id: "mech",
            name: "DEPARTMENT OF MECHANICAL ENGINEERING",
            head1: {
                name: "Dr. M.Venkata Ramana",
                designation: "Professor & Head Of the Department",
                qualification: "Qualification : B.E, M.Tech, PhD",
                specialisation: "Specialisation : Industrial Metallurgy",
                img: "https://cvr.ac.in/p/p322714317840371/ME-HOD.jpg"
            },
            head2: {
                name: "Dr.  M. Sowjanya",
                designation: "Professor & NBA Co-ordinator",
                qualification: "B.E, M.Tech, PhD",
                specialisation: "Specialisation : Thermal Engineering",
                img: "https://mech.cvr.ac.in/wp-content/uploads/Dr.-M.-Sowjanya-115x150.jpg"
            }
        },
        {
            id: "civil",
            name: "DEPARTMENT OF ELECTRICAL AND ELECTRONICS ENGINEERING",
            head1: {
                name: "Dr. S. Venkateshwarlu",
                designation: "Professor & Head Of the Department",
                qualification: "Qualification : B.E, M.Tech, PhD",
                specialisation: "Specialisation : Electrical Machines and Industrial Drives.",
                img: "https://static.wixstatic.com/media/a86348_2dcd9c2b74d8473e8b3b5ccb0aeded09~mv2.jpg/v1/crop/x_28,y_63,w_645,h_428/fill/w_349,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4809_JPG.jpg"
            },
            head2: {
                name: "Dr. G. Sreelakshmi",
                designation: "Professor",
                qualification: "B.Tech, M.Tech, Ph.D",
                specialisation: "Specialisation : Power Electronics and Industrial Drives",
                img: "https://static.wixstatic.com/media/a86348_4f5abbfdd4be4f579bee64b5c4fe6bb4~mv2.jpg/v1/fill/w_361,h_244,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dr_%20G_%20Sreelakshmi_JPG.jpg"
            }
        }
    ]

    function createDepartment(deptItem) {
        if (deptItem.id === dept) {
            return (
                <header>
                    <div className="deptContent">
                        <div style={{ textAlign: "center" }} className="deptHeading">
                            <h3><u>{deptItem.name}</u></h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <section class="sec2">
                                <div class="grid-container">
                                    <div class="grid-item"><h5 >16 PROFESSORS</h5></div>
                                    <div class="grid-item"><h5 >14 ASSISTANT PROFESSORS</h5></div>
                                    <div class="grid-item"><h5 >14 SENIOR ASSISTANT PROFESSORS</h5></div>
                                    <div class="grid-item"><h5 >38 ASSISTANT PROFESSORS</h5></div>
                                </div>
                            </section>
                            <section class="sec4">
                                <div class="grid-container2">

                                    <div class="grid-item2"><img src={deptItem.head1.img} alt="image1" id="hod" /></div>
                                    <div class="grid-item3">
                                        <h4>{deptItem.head1.name}</h4>
                                        <p id="p1">{deptItem.head1.designation}</p>
                                        <p id="p2">{deptItem.head1.qualification}</p>
                                        <p id="p3">{deptItem.head1.specialisation}</p>
                                    </div>


                                    <div class="grid-item2"><img src={deptItem.head2.img} alt="image2" id="vicePrincipal" /></div>
                                    <div class="grid-item4">
                                        <h4>{deptItem.head2.name}</h4>
                                        <p id="p1">{deptItem.head2.designation}</p>
                                        <p id="p2">{deptItem.head2.qualification}</p>
                                        <p id="p3">{deptItem.head2.specialisation}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <hr />
                </header>
            )
        }

    }
    return (
        <>
            <MainHeading />
            {department.map(createDepartment)}
            <Footer />
        </>
    )
}
export default Departments;



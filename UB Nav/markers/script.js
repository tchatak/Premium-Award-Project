// Set max view
const maxView = L.latLngBounds(
    L.latLng(4.1585, 9.2779), //top left
    L.latLng(4.1389, 9.2992), //bottom left

);

// Set initial map view
var map = L.map('map',{
    minZoom: 11,
    maxZoom: 19,
    maxBounds: maxView
}).setView([4.14898,9.28792], 16);


//this contains multiple markers on various locations of the map
const data = {
    //the different locations to the markers
    MG: {
      coords:[4.15391, 9.29093],
      title: "The Main Gate",
      bind: `
              audio.src ="./audios/mp3.mp3";
              <h1><center>WELCOME TO THE UNIVERSITY OF BUEA</center></h1>
              <img src="images/ub junction.jpg" width="100%" height="150px"/>
            `
    },
    CAB: {
        coords:[4.14889,9.28794],
        title: "The Central Administration",
        bind:`
              <h1><center>The Central Administration</center></h1>
              <p>
                <a href="https://www.ubuea.cm/about/leadership-and-administration/the-central-administration/">The Central Administration</a> of the University of Buea is a vital hub for managing administrative affairs. It encompasses the University Registrar’s Office. <br><br>
                The University of Buea’s Central Administration Building is located in the main campus of the University of Buea. <br><br>
                If you need to reach the Registrar’s Office, you can use the following mailing address:<br> 
                <b><a href="https://www.ubuea.cm/about/leadership-and-administration/the-central-administration/registrar/">The Registrar</a>, University of Buea, P.O.BOX 63 Buea, South West Region, Republic of Cameroon</b>

              </p>
              <img src="images/central admin.jpg" width="100%" height="150px"/>

            `
    },
    restau:{
        coords:[4.14741,9.28976],
        title:"Restau",
        bind:`
              <h1>The School cafeteria</h1>
              <h2>Generally called "The Power House"</h2>
              <p>Within the hallowed walls of the University of Buea, where knowledge blooms like a thousand suns, lies a haven of sustenance—the school’s canteen. <br><br>
              Here, amidst the chatter of hungry minds and the aroma of culinary secrets, students gather to refuel their spirits. The clinking of cutlery orchestrates a symphony of nourishment, and the humble tables bear witness to friendships forged over steaming bowls of wisdom. <br><br>
              As daylight dances through the windows, the canteen becomes a sanctuary—a place where hunger meets camaraderie, and the mundane transcends into magic.</p>
              <img src="images/resto.jpg" width="100%" height="150px"/>
            `
    },
    openAmphi:{
      coords: [4.14758,9.28748],
       title:"OpenAmphi",
       bind:`
              <h1>The Open-Air Amphi theater</h1>
              <p>The University of Buea boasts an open-air amphitheater, a vibrant space where various events take place. <br><br>
              Whether it’s matriculation ceremonies, convocations, or other gatherings, this amphitheater serves as a central hub for the university community. 🎓🌿
              <br><br>
              If you’re curious about specific events held there, here are a few examples:
              </p>
              <ol>
                <li><b>Matriculation Ceremony:</b> Admitted students gather at the amphitheater, dressed in official university attire, to take part in the matriculation ceremony. This marks their official entry into the university. 🎩📜
                </li>
                <li><b>Convocation Ceremonies:</b> The Herbert Nganjo Endeley Amphitheater has hosted convocation ceremonies, celebrating graduates’ achievements. It’s a momentous occasion where degrees are conferred, and students bid farewell to their alma mater. 🎓🎉
                </li>
                <li><b>Freshmen Matriculation:</b> Over 8,000 students once took the matriculation oath at this very amphitheater, officially becoming University of Buea students. 📜👩‍🎓
                </li>
              </ol>
              <img src="images/open amphii.jpg" width="100%" height="150px"/>
            `
       
    },

    Asti:{
        coords: [4.14731,9.28555],
         title:"ASTI Building",
         bind:`
                <h1>The Advanced School of Translators And Interpreters(ASTI)</h1>
                <p>The Advanced School of Translators and Interpreters (ASTI) at the University of Buea has a brand new building.<br><br> <a href='https://asti.ubuea.cm/en/asti-new-building/'>This impressive three-wing structure, fully funded by the Government of Cameroon, houses translation/interpretation teaching and practice laboratories, research facilities, a specialized resource center, library, classrooms, workshops, and staff offices.</a> 
                <br><br>It’s a significant addition to the university’s infrastructure, providing a conducive environment for language studies and research. 🏛️🌟
                
                </p> 
                <img src="images/asti1.jpg" width="250px" height="150px"/>
              ` 
      },

      oldAsti:{
        coords: [4.14857,9.28563],
         title:"Old ASTI Building",
         bind:` 
                <h2>The Old ASTI building</h2> 
                <p>The Old ASTI building is located in the main campus of the University of Buea. <br><br>
                 It was established in 1985 as part of the Buea University Centre, even before the transition to the University of Buea in 1993. The School has been a hub for translation and interpretation studies, celebrating its 20th anniversary in 2006
                </p>
                <img src="images/old-asti.jpg" width="100%" height="150px"/>
              ` 
      },

      staff_canteen:{
        coords: [4.14741,9.28624],
         title:"The Staff Canteen",
         bind:`
                <h2>The staff Canteen</h2> 
                <p>The staff canteen at the University of Buea provides a space for faculty and staff to dine. It’s a place where they can enjoy meals, recharge, and socialize during their busy workdays. If you’re ever on campus, consider checking it out! 🍽️🌟
                </p>
                <img src="images/staf2.jpg" width="100%" height="150px"/> 
              `
      },

      FacultyOfArt:{
        coords: [4.14920,9.28585],
         title:"The Faculty of Art",
         bind:`
                <h2>Faculty of Arts</h2> 
                <p>The Faculty of Arts at the University of Buea is a dynamic hub for cultural renaissance in Cameroon and the sub-region. Its vision is to foster time-honored values of the Arts and Humanities, preparing students for creativity and service within a mobilized economy. By 2015, the Faculty aimed to serve as a national, regional, and local resource center in its areas of interest. <br><br>
                <a href='https://www.ubuea.cm/academics/faculties-and-schools/faculty-of-arts/'>The mission includes equipping students with adaptable knowledge, advancing research, fostering collaboration, and linking teaching and research to local and national realities. 🎭🌟</a>
                </p>
                <img src="images/FOA.jpg" width="100%" height="150px"/>
              `
      },

      UBmarket:{
        coords: [4.14845,9.28534],
         title:"UB market",
         bind:`
                <h1>UB market</h1> 
                <p>The UB Market: A Lively Hub of Activity
                <br><br>
                 Nestled between the Faculty of Education and the Old Library Building, the UB Market is a colorful maze of stalls and tents. It’s conveniently accessible to students, faculty, and visitors.
                 <br><br>
                 Craving a quick bite? Head to the food court! Here, you’ll find a delightful mix sweet sugar balls and milky doughnuts.
                </p> 
                <img src="images/donut.jpg" width="100%" height="150px"/>
              ` 
      },

      Amphi150E:{
        coords: [4.14706, 9.28621],
         title:"Amphi150E",
         bind:`
                <h1>Amphi 150E</h1> 
                <p>The Amphi 150E building at the University of Buea is a notable structure on campus. While I don’t have specific details about its purpose or design, it likely serves as an amphitheater or lecture hall where students gather for classes, events, or presentations.
                <br><br> Imagine a spacious hall with tiered seating, where knowledge is shared, discussions unfold, and academic pursuits thrive! 🏛️🌟
                
                </p>

                <img src="images/amphi150E.jpg" width="100%" height="150px"/>
              `
      },

      Library:{
        coords: [4.14992,9.28512],
         title:"The Library",
         bind:`
                <h1>Library</h1> 
                <p>The University of Buea Library operates in two buildings:<br>
                <ol>
                  <li><b>Main Library:</b>
                    <ul>
                      <li>Located in a newly constructed building, the main library houses the Open Stacks Book Collection, Quick Reference, and General Reference Books.
                      </li>
                      <li>It’s a vibrant space where students and faculty explore knowledge, conduct research, and immerse themselves in academic resources.
                      </li>
                    </ul>
                    
                  </li>
                  <li><b>Annex Library:</b>
                    <ul>
                      <li>Situated behind the Faculty of Arts Building, the annex library contains special collections:
                        <ul>
                          <li>Reserve Books/Lecturers Notes</li>
                          <li>Archives</li>
                          <li>Journals</li>
                          <li>Cameroon Collection</li>
                        </ul>
                        
                      </li>
                    </ul>
                    
                  
                  </li>
                </ol>

                
                </p> 
                <img src="images/library.jpg" width="100%" height="150px"/>
              ` 
      },

      UNESCO:{
        coords: [4.14862,9.28473],
         title:"The UNESCO Building",
         bind:`
                <h1>UNESCO building</h1> 
                <p>The UNESCO Chair in Special Needs Education (SNE) was established in 2008 at the University of Buea in Cameroon. Here are some key details:
                <br><br>
                <ul>
                  <li>Purpose: The UNESCO Chair aims to enhance capacity in SNE through long and short courses, conduct action research, develop competence in assistive technologies, and implement inclusive education for learners facing barriers.</li>
                  <li>Host Institution: University of Buea.</li>
                  <li>Contact: Prof. Therese Mungah Shalo Tchombe (UNESCO Chairholder).</li>
                  <li>Objectives:
                    <ul>
                      <li>Strengthen strategic planning skills for institutional capacity in SNE.</li>
                      <li>Promote the use of assistive technology for inclusive classrooms.</li>
                      <li>Develop expertise in instructional procedures for learners with special needs.</li>
                      <li>Create a resource center for training, interventions, and rehabilitation.</li>
                      <li>Foster networking with other universities in sub-Saharan Africa.</li>
                    </ul>
                  </li>
                  <li>Activities: Research, intervention, rehabilitation, testing, publications, seminars, workshops, and advocacy.
                  <br><br>
                  The UNESCO Chair contributes to inclusive education and supports learners experiencing barriers.</li>
                
                <ul>

                </p> 
                <img src="images/unesco.jpg" width="100%" height="150px"/>
              ` 
      },

      IT:{
        coords: [4.14766,9.28848],
         title:"The IT center",
         bind:`
                <h1>IT center</h1> 
                <p>The Information Technology Centre (IT Centre) at the University of Buea is a vital hub for computing power and connectivity. It serves as the nerve center of technology within the university and acts as a gateway to the external world. Here are some key features:
                <ul>
                  <li>Ultramodern Cyber Center: Within the IT Centre, there’s a fully equipped cyber center where students and faculty can access the internet and office automation services. It’s a dynamic space for teaching, research, and training purposes.</li>
                  <li>Ultramodern Cyber Center: Within the IT Centre, there’s a fully equipped cyber center where students and faculty can access the internet and office automation services. It’s a dynamic space for teaching, research, and training purposes.</li>
                  <li>Objectives:
                    <ul>
                      <li>Facilitate teaching and learning.</li>
                      <li>Support research for both lecturers and students.</li>
                      <li>Develop and maintain the university’s IT infrastructure.</li>
                      <li>Develop and maintain the university’s IT infrastructure.</li>
                      <li>Reflect UB’s dynamic image nationally and internationally.</li>
                      <li>Make internet services affordable for students and the entire university community.</li>
                    </ul>
                  </li>
                
                </ul>
                
                </p> 
                <img src="images/skills.png" width="100%" height="170px"/>
              ` 
      },

      FacultyofEd:{
        coords: [4.14771,9.28500],
         title:"The Faculty Of Education",
         bind:`
                <h1>Faculty Of Education</h1> 
                <p>The Faculty of Education at the University of Buea is dedicated to preparing educational personnel, promoting excellence across all schooling levels, and conducting research and community services. Let’s explore its structure and objectives:
                <ol>
                  <li>Departments:
                    <ul>
                      <li>Department of Curriculum Studies and Teaching (CST):
                        <ul>
                          <li>Offers programs in Curriculum Studies and Teaching, Nursery and Primary Education, and a PhD in Curriculum Studies and Teaching.</li>
                          <li>Aims to produce qualified teachers for the Cameroon education system, promote pedagogic excellence, and enhance the teaching and learning process.</li>
                        
                        </ul>
                      </li>
                      <li>Department of Educational Foundations Administration (EFA):
                        <ul>
                          <li>Provides programs in Educational Foundations and Administration at the master’s and PhD levels./li>
                          <li>Focuses on foundational aspects of education administration and management.</li>
                        </ul>
                      
                      </li>
                      <li>Department of Educational Psychology (EPY):
                        <ul>
                          <li>Offers programs in Educational Psychology at the bachelor’s, master’s, and PhD levels./li>
                          <li>Addresses psychological aspects of teaching and learning.</li>
                        </ul>
                      
                      </li>
                    </ul>
                  </li>
                  <li>Distance Education Programme:
                    <ul>
                      <li>The Faculty believes in opening up university education to practicing teachers in nursery and primary schools.</li>
                      <li>Urgent need for academic socialization of teachers in disciplines like environmental education, peace education, human rights, and Information Technology.</li>
                    </ul>
                  </li>
                  <li>Mission Statement:
                    <ul>
                      <li>To prepare educational personnel, promote excellence, and advance educational sciences through professional training and research.</li>
                    </ul>
                  </li>
                  
                </ol>
                
                
                </p> 
                <img src="images/FOA.jpg" width="100%" height="150px"/>
              ` 
      },

      Classroomblk1:{
        coords: [4.14505,9.28623],
         title:"Classroom Block1",
         bind:`
                <h1>Classroom Block1</h1>
                 <p>The University of Buea has several classroom blocks where lectures take place. Here’s a summary of some courses and their corresponding locations for the first semester of the 2023/2024 academic year:
                 <ol>
                  <li>Biochemistry and Molecular Biology:
                    <ul>
                      <li>BCH401: Monday 07:00-09:00 (Classroom Block I, Room 100 A)</li>
                      <li>BCH405: Monday 13:00-15:00 (Amphi 150 E)</li>
                      <li>BCH313-G1: Tuesday 15:00-17:00 (Amphi 600)</li>
                      <li>… (other courses and locations)</li>
                    </ul>
                  </li>
                  <li>Botany and Plant Physiology:
                    <ul>
                      <li>BOT401: Friday 11:00-13:00 (Classroom Block I, Room 50 D)</li>
                      <li>BOT409: Friday 13:00-15:00 (Amphi 150 B)</li>
                      <li>… (other courses and locations)</li>
                    </ul>
                  </li>
                  <li>Chemistry:
                    <ul>
                      <li>CHM431: Monday 09:00-11:00 (Classroom Block II, Room 100 B)</li>
                      <li>CHM335: Wednesday 09:00-11:00 (Amphi 150 A)</li>
                      <li>… (other courses and locations)</li>
                    </ul>
                  </li>
                 </ol>
                 
                 
                 </p> 
                 <img src="images/CRblk1.jpg" width="250px" height="100%"/>
              ` 
      },

      Amphi600:{
        coords: [4.14576,9.28604],
         title:"Amphi600",
         bind:`
                <h1>Amphi 600</h1> 
                <p>Amphi 600 at the University of Buea serves as a venue for lectures, seminars, and other academic activities. It’s a space where students attend classes, engage in discussions, and learn from their professors.
                </p> 
                
              `
      },

      Ublock:{
        coords: [4.14982,9.28368],
         title:"U-block",
         bind:`
                <h1>U-Block</h1> 
                <p>The Ublock building at the University of Buea serves as a venue for lectures, seminars, and other academic activities. It’s a space where students attend classes, engage in discussions, and learn from their professors.
                </p>  
                <img src="images/Ublock.jpg" width="100%" height="150px"/>
              ` 
      },

      healthcenter:{
        coords: [4.15093,9.28732],
         title:"The Health Unit",
         bind:`
                <h1><center>Health Center</center></h1> 
                <p>Our mission is to improve health care through the training of public health experts on common communicable and environmentally related diseases, including non-communicable health conditions of public health interest.<br> Candidates acquire elaborate knowledge on project proposal development and implementation, epidemiological trends and monitoring of common health conditions, including knowledge on research and the distribution of health resources.</p> 
                <img src="images/health.jpg" width="100%" height="200px"/>
              `,
      },

      FacultyofSci:{
        coords: [4.15088,9.28482],
         title:"The Faculty of science",
         bind:`
                <h1>The Faculty of Science</h1> 
                <p>The Faculty of Science at the University of Buea is dedicated to the pursuit of scientific truth through research and teaching. It equips students with the tools for objective analysis, methodology, and technical know-how to establish facts.<br><br>
                Graduates gain specialized knowledge in various domains of modern science, contributing to human and environmental development. The faculty fosters virtues like hard work, honesty, and civic responsibility. Here are some academic programs offered within the faculty:
                <ol>
                  <li>Biochemistry and Molecular Biology (BMB):
                    <ul>
                      <li>BSc Biochemistry</li>
                      <li>BSc Biochemistry and Clinical Laboratory Technology (Double Major)</li>
                      <li>MSc Biochemistry</li>
                    </ul>
                  </li>
                  <li>Botany and Plant Physiology (BPP):
                    <ul>
                      <li>BSc Botany</li>
                      <li>MSc Botany</li>
                      <li>PhD Botany</li>
                    </ul>
                  </li>
                  <li>Chemistry (CHM):
                    <ul>
                      <li>BSc Chemistry</li>
                      <li>MSc Chemistry</li>
                      <li>PhD Chemistry</li>
                    </ul>
                  </li>
                  <li>Computer Science (CSC):
                    <ul>
                      <li>Minor in Computer Science</li>
                      <li>MSc Computer Science</li>
                      <li>PhD Computer Science</li>
                    </ul>
                  </li>
                  <li>Environmental Science (ENV):
                    <ul>
                      <li>BSc Environmental Science</li>
                      <li>MSc in Natural Resource and Environmental Management</li>
                    </ul>
                  </li>
                  <li>Geology (GLY):
                    <ul>
                      <li>BSc Geology</li>
                      <li>MSc in Applied Geology</li>
                      <li>PhD Applied Geology</li>
                    </ul>
                  </li>
                  <li>Mathematics (MAT):
                    <ul>
                      <li>BSc Mathematics</li>
                      <li>MSc Mathematics</li>
                      <li>PhD Mathematics</li>
                    </ul>
                  </li>
                  <li>Microbiology and Parasitology (MCP):
                    <ul>
                      <li>BSc Microbiology</li>
                      <li>MSc Microbiology</li>
                      <li>PhD Microbiology</li>
                    </ul>
                  </li>
                  <li>Physics (PHY):
                    <ul>
                      <li>Physics (PHY):</li>
                      <li>Physics (PHY):</li>
                      <li>Physics (PHY):</li>
                    </ul>
                  </li>
                  <li>Physics (PHY):
                    <ul>
                      <li>Physics (PHY):</li>
                      <li>Physics (PHY):</li>
                      <li>Physics (PHY):</li>
                    </ul>
                  </li>

                </ol>

                </p> 
                <img src="images/lab technician.png" width="100%" height="150px"/>
              `
      },

      Gblock:{
        coords: [4.15030,9.28326],
         title:"G-block",
         bind:`
                <h1>G- Block</h1> 
                <p>The Ublock building at the University of Buea serves as a venue for lectures, seminars, and other academic activities. It’s a space where students attend classes, engage in discussions, and learn from their professors.
                </p>
              `
      },
};


const customIcon = L.icon({
  iconUrl: 'icons/location.png', // Specify the path to the custom icon image
  iconSize: [32, 32], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const MGIcon = L.icon({
  iconUrl: 'icons/gate.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const CABIcon = L.icon({
  iconUrl: 'icons/admin.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const restauIcon = L.icon({
  iconUrl: 'icons/restau.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const openAmphiIcon = L.icon({
  iconUrl: 'icons/theatre.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const AstiIcon = L.icon({
  iconUrl: 'icons/translation.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const oldAstiIcon = L.icon({
  iconUrl: 'icons/translation old.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const staff_canteenIcon = L.icon({
  iconUrl: 'icons/canteen.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const FacultyOfArtIcon = L.icon({
  iconUrl: 'icons/art.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const UBmarketIcon = L.icon({
  iconUrl: 'icons/food.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const Amphi150EIcon = L.icon({
  iconUrl: 'icons/amphi.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const LibraryIcon = L.icon({
  iconUrl: 'icons/library.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const UNESCOIcon = L.icon({
  iconUrl: 'icons/unesco.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const ITIcon = L.icon({
  iconUrl: 'icons/system.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const FacultyofEdIcon = L.icon({
  iconUrl: 'icons/education.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const Classroomblk1Icon = L.icon({
  iconUrl: 'icons/classroom.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const Amphi600Icon = L.icon({
  iconUrl: 'icons/audience.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const UblockIcon = L.icon({
  iconUrl: 'icons/ublockclass.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const healthcenterIcon = L.icon({
  iconUrl: 'icons/first aid.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const FacultyofSciIcon = L.icon({
  iconUrl: 'icons/microscope.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

const GblockIcon = L.icon({
  iconUrl: 'icons/gblockclass.png', // Specify the path to the custom icon for Gblock
  iconSize: [25, 25], // Adjust the size of the icon as needed
  iconAnchor: [16, 32] // Adjust the anchor point of the icon as needed
});

for(let key in data) {

  const UBdata = data[key]; 

  let markerIcon = customIcon; // Default icon

  if (key === "MG") {
    markerIcon = MGIcon; // Use different icon for marker
  }

  if (key === "CAB") {
    markerIcon = CABIcon; // Use different icon for marker
  }
  
  if (key === "restau") {
    markerIcon = restauIcon; // Use different icon for marker
  }

  if (key === "openAmphi") {
    markerIcon = openAmphiIcon; // Use different icon for marker
  }

  if (key === "Asti") {
    markerIcon = AstiIcon; // Use different icon for marker
  }

  if (key === "oldAsti") {
    markerIcon = oldAstiIcon; // Use different icon for marker
  }

  if (key === "staff_canteen") {
    markerIcon = staff_canteenIcon; // Use different icon for marker
  }

  if (key === "FacultyOfArt") {
    markerIcon = FacultyOfArtIcon; // Use different icon for marker
  }

  if (key === "UBmarket") {
    markerIcon = UBmarketIcon; // Use different icon for marker
  }

  if (key === "Amphi150E") {
    markerIcon = Amphi150EIcon; // Use different icon for marker
  }

  if (key === "Library") {
    markerIcon = LibraryIcon; // Use different icon for marker
  }

  if (key === "UNESCO") {
    markerIcon = UNESCOIcon; // Use different icon for marker
  }

  if (key === "IT") {
    markerIcon = ITIcon; // Use different icon for marker
  }

   if (key === "FacultyofEd") {
    markerIcon = FacultyofEdIcon; // Use different icon for marker
  }

  if (key === "Classroomblk1") {
    markerIcon = Classroomblk1Icon; // Use different icon for marker
  }

  if (key === "Amphi600") {
    markerIcon = Amphi600Icon; // Use different icon for marker
  }

  if (key === "Ublock") {
    markerIcon = UblockIcon; // Use different icon for marker
  }

  if (key === "healthcenter") {
    markerIcon = healthcenterIcon; // Use different icon for marker
  }

  if (key === "FacultyofSci") {
    markerIcon = FacultyofSciIcon; // Use different icon for marker
  }
  if (key === "Gblock") {
    markerIcon = GblockIcon; // Use different icon for marker
  }

  L.marker(UBdata.coords,{ 
    icon: markerIcon, // Assign the custom icon to the marker
    title: UBdata.title
  })
  .bindPopup(UBdata.bind, {
    autoPan: true // Enable automatic panning to the marker
  })
  .addTo(map);

}


// Create audio elements for locations
const audioMG = new Audio('audios/main_gate.wav');
const audioCAB = new Audio('audios/Central_Administration.wav');
const audiorestau = new Audio('audios/Restau.wav');
const audioopenAmphi = new Audio('audios/OpenAmphi.wav');
const audioAsti = new Audio('audios/Asti.wav');
const audiooldAsti = new Audio('audios/oldAsti.wav');
const audiostaff_canteen = new Audio('audios/Staff Canteen.wav');
const audioFacultyOfArt = new Audio('audios/Faculty of Arts.wav');
const audioUBmarket = new Audio('audios/UB market.wav');
const audioAmphi150E = new Audio('audios/Amphi150E.wav');
const audioLibrary = new Audio('audios/Library.wav');
const audioUNESCO = new Audio('audios/UNESCO.wav');
const audioIT = new Audio('audios/IT center.wav');
const audioFacultyofEd = new Audio('audios/Faculty Of Education.wav');
const audioClassroomblk1 = new Audio('audios/Classroom Block1.wav');
const audioAmphi600 = new Audio('audios/Amphi600.wav');
const audioUblock = new Audio('audios/U-block.wav');
const audiohealthcenter = new Audio('audios/Health Center.wav');
const audioFacultyofSci = new Audio('audios/Faculty of science.wav');
const audioGblock = new Audio('audios/G- Block.wav');

// Create markers
const markerMG = L.marker(data.MG.coords, {opacity : 0}).addTo(map);
const markerCAB = L.marker(data.CAB.coords, {opacity : 0}).addTo(map);
const markerrestau = L.marker(data.restau.coords, {opacity : 0}).addTo(map);
const markeropenAmphi = L.marker(data.openAmphi.coords, {opacity : 0}).addTo(map);
const markerAsti = L.marker(data.Asti.coords, {opacity : 0}).addTo(map);
const markeroldAsti = L.marker(data.oldAsti.coords, {opacity : 0}).addTo(map);
const markerstaff_canteen = L.marker(data.staff_canteen.coords, {opacity : 0}).addTo(map);
const markerFacultyOfArt = L.marker(data.FacultyOfArt.coords, {opacity : 0}).addTo(map);
const markerUBmarket = L.marker(data.UBmarket.coords, {opacity : 0}).addTo(map);
const markerAmphi150E = L.marker(data.Amphi150E.coords, {opacity : 0}).addTo(map);
const markerLibrary = L.marker(data.Library.coords, {opacity : 0}).addTo(map);
const markerUNESCO = L.marker(data.UNESCO.coords, {opacity : 0}).addTo(map);
const markerIT = L.marker(data.IT.coords, {opacity : 0}).addTo(map);
const markerFacultyofEd = L.marker(data.FacultyofEd.coords, {opacity : 0}).addTo(map);
const markerClassroomblk1 = L.marker(data.Classroomblk1.coords, {opacity : 0}).addTo(map);
const markerAmphi600 = L.marker(data.Amphi600.coords, {opacity : 0}).addTo(map);
const markerUblock = L.marker(data.Ublock.coords, {opacity : 0}).addTo(map);
const markerhealthcenter = L.marker(data.healthcenter.coords, {opacity : 0}).addTo(map);
const markerFacultyofSci = L.marker(data.FacultyofSci.coords, {opacity : 0}).addTo(map);
const markerGblock = L.marker(data.Gblock.coords, {opacity : 0}).addTo(map);

// Add click event listeners to markers
markerMG.on('click', function () {
    // Play mp31.mp3
    audioMG.play();
});
markerCAB.on('click', function () {
    // Play mp32.mp3
    audioCAB.play();
});
markerrestau.on('click', function () {
  // Play mp32.mp3
  audiorestau.play();
});
markeropenAmphi.on('click', function () {
  // Play mp32.mp3
  audioopenAmphi.play();
});
markerAsti.on('click', function () {
  // Play mp32.mp3
  audioAsti.play();
});
markeroldAsti.on('click', function () {
  // Play mp32.mp3
  audiooldAsti.play();
});
markerstaff_canteen.on('click', function () {
  // Play mp32.mp3
  audiostaff_canteen.play();
});
markerFacultyOfArt.on('click', function () {
  // Play mp32.mp3
  audioFacultyOfArt.play();
});
markerUBmarket.on('click', function () {
  // Play mp32.mp3
  audioUBmarket.play();
});
markerAmphi150E.on('click', function () {
  // Play mp32.mp3
  audioAmphi150E.play();
});
markerLibrary.on('click', function () {
  // Play mp32.mp3
  audioLibrary.play();
});
markerUNESCO.on('click', function () {
  // Play mp32.mp3
  audioUNESCO.play();
});
markerIT.on('click', function () {
  // Play mp32.mp3
  audioIT.play();
});
markerFacultyofEd.on('click', function () {
  // Play mp32.mp3
  audioFacultyofEd.play();
});
markerClassroomblk1.on('click', function () {
  // Play mp32.mp3
  audioClassroomblk1.play();
});
markerAmphi600.on('click', function () {
  // Play mp32.mp3
  audioAmphi600.play();
});
markerUblock.on('click', function () {
  // Play mp32.mp3
  audioUblock.play();
});
markerhealthcenter.on('click', function () {
  // Play mp32.mp3
  audiohealthcenter.play();
});
markerFacultyofSci.on('click', function () {
  // Play mp32.mp3
  audioFacultyofSci.play();
});
markerGblock.on('click', function () {
  // Play mp32.mp3
  audioGblock.play();
});

// Add popups to markers
markerMG.bindPopup(data.MG.bind);
markerCAB.bindPopup(data.CAB.bind);
markerrestau.bindPopup(data.restau.bind);
markeropenAmphi.bindPopup(data.openAmphi.bind);
markerAsti.bindPopup(data.Asti.bind);
markeroldAsti.bindPopup(data.oldAsti.bind);
markerstaff_canteen.bindPopup(data.staff_canteen.bind);
markerFacultyOfArt.bindPopup(data.FacultyOfArt.bind);
markerUBmarket.bindPopup(data.UBmarket.bind);
markerAmphi150E.bindPopup(data.Amphi150E.bind);
markerLibrary.bindPopup(data.Library.bind);
markerUNESCO.bindPopup(data.UNESCO.bind);
markerIT.bindPopup(data.IT.bind);
markerFacultyofEd.bindPopup(data.FacultyofEd.bind);
markerClassroomblk1.bindPopup(data.Classroomblk1.bind);
markerAmphi600.bindPopup(data.Amphi600.bind);
markerUblock.bindPopup(data.Ublock.bind);
markerhealthcenter.bindPopup(data.healthcenter.bind);
markerFacultyofSci.bindPopup(data.FacultyofSci.bind);
markerGblock.bindPopup(data.Gblock.bind);



// OSM Basemap, Defining your base map (OpenStreetMap)
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Open street maps &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);  

// Define the satalitescale layer (you can customize this layer)
const satalitescaleLayer = L.tileLayer('https://mts0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: 'Google Maps Satalite view &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Set up the button event listener
const button = document.getElementById('layerSwitchButton');
button.addEventListener('click', function () {
    if (map.hasLayer(osm)) {
        // Switch to the satalitescale layer
        map.removeLayer(osm);
        satalitescaleLayer.addTo(map);
    } else {
        // Switch back to the base map
        map.removeLayer(satalitescaleLayer);
        osm.addTo(map);
    }



});

let initialMarker; // Declare the initial marker variable
let destinationMarker; // Declare the destination marker variable
let routingControl; // Declare the routing control variable
let routingStarted = false; // Flag to track if routing has started

const notificationElement = document.getElementById('notification');

// Function to show notification
function showNotification(message) {
    notificationElement.innerText = message;
    notificationElement.style.display = 'block';
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}

// Disable map click initially
map.off('click');

// Function to enable map click and set initial/destination markers
function enableMapClick() {
    map.on('click', onMapClick);
}

function onMapClick(e) {
    if (!initialMarker) {
        initialMarker = L.marker(e.latlng).addTo(map); // Create initial marker
    } else if (!destinationMarker) {
        destinationMarker = L.marker(e.latlng).addTo(map); // Create destination marker

        // Set up routing control with new points
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(initialMarker.getLatLng()), // Initial point (user-selected)
                L.latLng(destinationMarker.getLatLng()) // Destination point (user-selected)
            ]
        }).on('routesfound', function (e) {
            // Update the initial marker position along the route
            e.routes[0].coordinates.forEach(function (coord, index) {
                setTimeout(() => {
                    initialMarker.setLatLng([coord.lat, coord.lng]);
                }, 100 * index);
            });
        }).addTo(map);

        // Disable further map clicks
        map.off('click', onMapClick);
        routingStarted = true; // Set the flag to indicate routing has started
        showNotification('Routing has started');
    }
}

// Function to reset markers and routing control
function resetMarkers() {
    if (routingStarted) {
        if (initialMarker) {
            map.removeLayer(initialMarker);
            initialMarker = null;
        }
        if (destinationMarker) {
            map.removeLayer(destinationMarker);
            destinationMarker = null;
        }
        if (routingControl) {
            map.removeControl(routingControl);
            routingControl = null;
        }

        // Enable map click to select new points
        enableMapClick();
        showNotification('Routing has been reset');
    }
}

// Function to stop routing and reset everything
function stopRouting() {
    if (initialMarker) {
        map.removeLayer(initialMarker);
        initialMarker = null;
    }
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
        destinationMarker = null;
    }
    if (routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
    }
    routingStarted = false;
    map.off('click', onMapClick);
    showNotification('Routing has stopped');
}

// Add event listener to the "Reset" button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetMarkers);

// Add event listener to the "See" button
const outsideMapButton = document.getElementById('see');
outsideMapButton.addEventListener('click', function() {
    stopRouting(); // Clear any existing markers and routes
    routingStarted = true; // Set the flag to indicate routing can start
    enableMapClick(); // Enable map click to create new points
    showNotification('Routing has started');
});

// Add event listener to the "Stop Routing" button
const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopRouting);

// Disable map clicks initially
map.off('click');

console.log(L)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesopotamia: The Ultimate Question Bank</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap');

        body {
            font-family: 'Lato', sans-serif;
            background-color: #121212;
            color: #E0E0E0;
            margin: 0;
            padding: 0;
            font-size: 16px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: auto;
            overflow: hidden;
            padding: 0 20px;
        }

        h1, h2 {
            font-family: 'Cinzel', serif;
            color: #FFDAB9; /* Soft Orange */
            text-align: center;
            text-shadow: 2px 2px 4px #000;
        }

        h1 {
            font-size: 2.8em;
            margin: 20px 0;
            border-bottom: 2px solid #FFA04D;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 2.2em;
            margin-top: 50px;
            margin-bottom: 20px;
            border-bottom: 1px solid #444;
            padding-bottom: 15px;
        }
        
        .intro-text {
            text-align: center;
            color: #ccc;
            margin-bottom: 40px;
            font-style: italic;
        }

        /* Navigation Bar */
        .navbar {
            background-color: #1E1E1E;
            padding: 10px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 2px solid #FFA04D;
            width: 100%;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .nav-links li {
            margin: 5px 10px;
        }
        .nav-links a {
            color: #FFDAB9;
            text-decoration: none;
            font-family: 'Cinzel', serif;
            font-weight: bold;
            transition: color 0.3s;
            font-size: 0.9em;
        }
        .nav-links a:hover {
            color: #fff;
        }

        .question-section {
            margin-bottom: 40px;
            padding-top: 60px; /* For nav anchor spacing */
            margin-top: -40px; /* Counteract padding */
        }

        .accordion {
            background-color: #1E1E1E;
            color: #FFDAB9;
            cursor: pointer;
            padding: 18px 20px;
            width: 100%;
            box-sizing: border-box;
            border: none;
            border-left: 5px solid #FFA04D;
            text-align: left;
            outline: none;
            font-size: 1.1em;
            transition: background-color 0.4s ease;
            margin-top: 10px;
            border-radius: 0 8px 8px 0;
            font-family: 'Lato', sans-serif;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .accordion span {
            flex-grow: 1;
            padding-right: 10px;
        }

        .accordion:hover, .accordion.active {
            background-color: #333;
        }
        
        .accordion .plus-minus::after {
            content: '+';
            font-size: 1.5em;
            color: #FFA04D;
            line-height: 1;
        }

        .accordion.active .plus-minus::after {
            content: "−";
        }
        
        .most-likely {
            color: #FFC107; /* Gold color for emphasis */
            font-weight: bold;
            font-size: 0.9em;
            margin-left: 15px;
            flex-shrink: 0;
        }
        
        .variation {
            color: #87CEEB; /* Sky blue for variations */
            font-style: italic;
            font-size: 0.9em;
        }

        .panel {
            padding: 0 25px;
            background-color: #181818;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            border-left: 5px solid #FFA04D;
            margin-bottom: 10px;
        }
        
        .answer-point {
            margin: 20px 0;
        }
        
        .answer-point h3 {
            font-family: 'Cinzel', serif;
            color: #FFA04D;
            font-size: 1.2em;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .answer-point p, .answer-point ul, .answer-point ol, .answer-point table {
            color: #ccc;
            margin: 0;
            padding-left: 10px;
            border-left: 2px solid #555;
            text-align: justify;
        }
        
        ul, ol {
            padding-left: 30px;
        }
        
        .mcq-options { list-style-type: lower-alpha; }
        .correct-answer { color: #4CAF50; font-weight: bold; }
        .citation {
            font-size: 0.8em;
            color: #888;
            display: block;
            margin-top: 5px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        
        th, td {
            border: 1px solid #555;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background-color: #333;
            color: #FFDAB9;
        }
        
        .picture-based img {
            max-width: 100%;
            max-height: 250px;
            height: auto;
            border: 2px solid #FFA04D;
            border-radius: 8px;
            margin-top: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

    </style>
</head>
<body>

    <nav class="navbar">
        <ul class="nav-links">
            <li><a href="#objective">Objective Type</a></li>
            <li><a href="#picture-based">Picture-Based</a></li>
            <li><a href="#vsa">1-Marker</a></li>
            <li><a href="#sa1">2-Marker</a></li>
            <li><a href="#sa2">3-Marker</a></li>
            <li><a href="#la">4/5-Marker</a></li>
            <li><a href="#essay">8-Marker</a></li>
        </ul>
    </nav>

    <div class="container">
        <h1>Mesopotamian Civilization: The Ultimate Question Bank</h1>
        <p class="intro-text">An exhaustive collection of questions covering every aspect of the chapter "Writing and City Life".</p>

        <!-- OBJECTIVE TYPE QUESTIONS -->
        <div id="objective" class="question-section">
            <h2>Objective Type Questions</h2>
            
            <button class="accordion"><span>Multiple Choice Questions (MCQs)</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point">
                    <p>1. The name Mesopotamia is derived from which language?</p>
                    <ol class="mcq-options">
                        <li>Latin</li>
                        <li>Sumerian</li>
                        <li>Greek</li>
                        <li>Akkadian</li>
                    </ol>
                    <p class="correct-answer">c) Greek</p><span class="citation">(Source: p. 9, Margin Note)</span>
                </div>
                <div class="answer-point">
                    <p>2. The earliest cities in Mesopotamia date back to which age?</p>
                    <ol class="mcq-options">
                        <li>Iron Age</li>
                        <li>Stone Age</li>
                        <li>Copper Age</li>
                        <li>Bronze Age</li>
                    </ol>
                    <p class="correct-answer">d) Bronze Age</p><span class="citation">(Source: p. 12, Margin Note)</span>
                </div>
                <div class="answer-point">
                    <p>3. Around what year did Akkadian speakers arrive and gradually replace the Sumerian language?</p>
                    <ol class="mcq-options">
                        <li>3200 BCE</li>
                        <li>2800 BCE</li>
                        <li>2400 BCE</li>
                        <li>2000 BCE</li>
                    </ol>
                    <p class="correct-answer">c) 2400 BCE</p><span class="citation">(Source: p. 9)</span>
                </div>
                <div class="answer-point">
                    <p>4. Which of these was NOT a primary resource Mesopotamia traded its agricultural produce for?</p>
                    <ol class="mcq-options">
                        <li>Wood</li>
                        <li>Copper</li>
                        <li>Pottery</li>
                        <li>Gold</li>
                    </ol>
                    <p class="correct-answer">c) Pottery</p><span class="citation">(Source: p. 13)</span>
                </div>
                <div class="answer-point">
                    <p>5. The Mesopotamian ruler Nabonidus found an inscribed statue of which ancient king?</p>
                    <ol class="mcq-options">
                        <li>Gilgamesh</li>
                        <li>Enmerkar</li>
                        <li>Sargon of Akkad</li>
                        <li>Assurbanipal</li>
                    </ol>
                    <p class="correct-answer">c) Sargon of Akkad</p><span class="citation">(Source: p. 27)</span>
                </div>
            </div>

            <button class="accordion"><span>Fill in the Blanks</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><p>1. The first known language of Mesopotamia was __________. <span class="correct-answer">Sumerian</span><span class="citation">(Source: p. 9)</span></p></div>
                <div class="answer-point"><p>2. The last ruler of independent Babylon, known as an early archaeologist, was __________. <span class="correct-answer">Nabonidus</span><span class="citation">(Source: p. 27)</span></p></div>
                <div class="answer-point"><p>3. In Mesopotamia, stone slabs with inscriptions or carvings are known as __________. <span class="correct-answer">Steles</span><span class="citation">(Source: p. 18, Margin Note)</span></p></div>
                <div class="answer-point"><p>4. In the city of Ur, house roofs sloped inwards to channel rainwater into __________. <span class="correct-answer">sumps</span><span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><p>5. The division of the hour into 60 minutes is a legacy from the __________. <span class="correct-answer">Mesopotamians</span><span class="citation">(Source: p. 25)</span></p></div>
            </div>

            <button class="accordion"><span>True or False</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><p>1. Mesopotamian society was largely illiterate, with very few people who could read and write. <span class="correct-answer">True</span><span class="citation">(Source: p. 15)</span></p></div>
                <div class="answer-point"><p>2. The city of Mari was primarily prosperous due to its highly productive agriculture. <span class="correct-answer">False.</span> Mari was exceptionally prosperous due to its prime position for trade. <span class="citation">(Source: pp. 21, 24)</span></p></div>
                <div class="answer-point"><p>3. The Old Testament refers to Sumer as the land of 'Shinar'. <span class="correct-answer">True</span><span class="citation">(Source: p. 9)</span></p></div>
                <div class="answer-point"><p>4. Mesopotamian temples always had straight outer walls, similar to ordinary houses. <span class="correct-answer">False.</span> Temples always had their outer walls going in and out at regular intervals, which no ordinary building ever had. <span class="citation">(Source: p. 16)</span></p></div>
                <div class="answer-point"><p>5. The earliest Mesopotamian tablets from 3200 BCE were used for writing epic poems. <span class="correct-answer">False.</span> They contained picture-like signs and numbers, and were lists of goods. <span class="citation">(Source: p. 13)</span></p></div>
            </div>

            <button class="accordion"><span>Match the Following</span><span class="plus-minus"></span></button>
            <div class="panel">
                <table>
                  <tr><th>Column A (Term/Person)</th><th>Column B (Associated Feature/Title)</th></tr>
                  <tr><td>1. Gilgamesh</td><td>a. Library at Nineveh</td></tr>
                  <tr><td>2. Ur</td><td>b. Ruler of Uruk, subject of an epic</td></tr>
                  <tr><td>3. Assurbanipal</td><td>c. Trading town on the Euphrates</td></tr>
                  <tr><td>4. Mari</td><td>d. Temple of the Moon God</td></tr>
                  <tr><td>5. Cuneiform</td><td>e. Wedge-shaped script</td></tr>
                </table>
                <div class="answer-point">
                    <h3>Correct Answer</h3>
                    <p>1-b, 2-d, 3-a, 4-c, 5-e</p>
                    <span class="citation">Citations: Gilgamesh (p. 25), Ur (p. 16), Assurbanipal (p. 26), Mari (p. 21), Cuneiform (p. 14)</span>
                </div>
            </div>
            
            <button class="accordion"><span>Assertion and Reason</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point">
                    <p>1. <b>Assertion (A):</b> Water transport was the cheapest mode of transportation in ancient Mesopotamia.<br>
                    <b>Reason (R):</b> When animals transport goods, they need to be fed, which adds to the cost of transport.</p>
                    <ol class="mcq-options">
                        <li>Both A and R are true and R is the correct explanation of A.</li>
                        <li>Both A and R are true but R is not the correct explanation of A.</li>
                        <li>A is true but R is false.</li>
                        <li>A is false but R is true.</li>
                    </ol>
                    <p class="correct-answer">a) Both A and R are true and R is the correct explanation of A.</p><span class="citation">(Source: p. 13)</span>
                </div>
                 <div class="answer-point">
                    <p>2. <b>Assertion (A):</b> The city of Uruk had a defensive wall at a very early date.<br>
                    <b>Reason (R):</b> There was continuous warfare in the region, and people felt safer living in fortified cities.</p>
                    <ol class="mcq-options">
                        <li>Both A and R are true and R is the correct explanation of A.</li>
                        <li>Both A and R are true but R is not the correct explanation of A.</li>
                        <li>A is true but R is false.</li>
                        <li>A is false but R is true.</li>
                    </ol>
                    <p class="correct-answer">a) Both A and R are true and R is the correct explanation of A.</p><span class="citation">(Source: p. 18)</span>
                </div>
            </div>
        </div>
        
        <!-- PICTURE-BASED QUESTIONS -->
        <div id="picture-based" class="question-section">
            <h2>Picture-Based Questions</h2>
             <button class="accordion"><span>Based on the description of the 'Warka Head' (p. 12), answer the following.</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point">
                    <h3>1. In which city and before what date was this sculpture made?</h3>
                    <p>It was sculpted in the city of Uruk before 3000 BCE. <span class="citation">(Source: p. 12)</span></p>
                </div>
                <div class="answer-point">
                    <h3>2. What materials would have been used for the eyes and eyebrows?</h3>
                    <p>The eyes and eyebrows would probably have taken lapis lazuli (blue), shell (white), and bitumen (black) inlays. <span class="citation">(Source: p. 12)</span></p>
                </div>
                <div class="answer-point">
                    <h3>3. What does the text suggest about the procurement of the stone?</h3>
                    <p>It was modelled in a hard stone that would have been imported from a distance, as most parts of southern Mesopotamia lacked stones for tools and jewels. <span class="citation">(Source: pp. 12, 13)</span></p>
                </div>
            </div>
            <button class="accordion"><span>Based on the impression of a cylinder seal (p. 18), answer the following.</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point">
                    <img src="https://i.imgur.com/example.png" alt="A placeholder for the cylinder seal impression from p.18. It would show a bearded, armed hero figure standing over bound prisoners."/>
                    <h3>1. Describe the central figure.</h3>
                    <p>The central figure is a bearded and armed standing figure, similar in dress and hairstyle to the hero depicted in other steles from the period. He appears to be a war leader. <span class="citation">(Source: p. 18)</span></p>
                </div>
                <div class="answer-point">
                    <h3>2. What does the scene depict?</h3>
                    <p>The scene depicts a war leader with three prisoners of war, whose arms are bound. There is also a fourth man beseeching the war leader. <span class="citation">(Source: p. 18)</span></p>
                </div>
            </div>
        </div>

        <!-- VSA QUESTIONS -->
        <div id="vsa" class="question-section">
            <h2>1-Marker Questions (Very Short Answer)</h2>
            <button class="accordion"><span>1. What is a stele?</span><span class="plus-minus"></span></button>
            <div class="panel"><p>Steles are stone slabs with inscriptions or carvings. <span class="citation">(Source: p. 18, Margin Note)</span></p></div>
            <button class="accordion"><span>2. Name one of the earliest rulers of Uruk.</span><span class="plus-minus"></span></button>
            <div class="panel"><p>Enmerkar. <span class="citation">(Source: p. 15)</span></p></div>
            <button class="accordion"><span>3. What is the literal meaning of 'cuneiform'?</span><span class="plus-minus"></span></button>
            <div class="panel"><p>It is derived from the Latin words 'cuneus' (wedge) and 'forma' (shape). <span class="citation">(Source: p. 14, Margin Note)</span></p></div>
            <button class="accordion"><span>4. What was the main industrial material for tools and weapons in Mesopotamia?</span><span class="plus-minus"></span></button>
            <div class="panel"><p>Bronze. <span class="citation">(Source: p. 24)</span></p></div>
            <button class="accordion"><span>5. From which island did Mesopotamia source its copper?</span><span class="plus-minus"></span></button>
            <div class="panel"><p>From 'Alashiya', the island of Cyprus. <span class="citation">(Source: p. 24)</span></p></div>
        </div>

        <!-- SA1 QUESTIONS -->
        <div id="sa1" class="question-section">
            <h2>2-Marker Questions (Short Answer)</h2>
            <button class="accordion"><span>1. State two features of the Mesopotamian nuclear family.</span><span class="most-likely">⭐ Most Likely</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Patriarchal Structure</h3><p>The nuclear family, comprising a man, his wife and children, was the norm. The father was the head of the family. <span class="citation">(Source: p. 19)</span></p></div>
                <div class="answer-point"><h3>Marriage and Inheritance</h3><p>A declaration of willingness to marry was made, and gifts were exchanged. A bride was given her share of inheritance from her father, while the father's house, herds, and fields were inherited by the sons. <span class="citation">(Source: p. 20)</span></p></div>
            </div>
            <button class="accordion"><span>2. Why were mobile animal herders not necessarily a threat to town life?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Mutual Exchange</h3><p>Herders needed to exchange young animals, cheese, leather, and meat in return for grain, metal tools, and other goods produced in cities. The manure from their flocks was also of great use to farmers. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Integration into Society</h3><p>Such groups would come into the sown area as herders, harvest labourers or hired soldiers. Some would become prosperous and settle down, occasionally gaining enough power to establish their own rule, such as the Amorite kings of Mari. <span class="citation">(Source: p. 21)</span></p></div>
            </div>
             <button class="accordion"><span>3. What do Mesopotamian superstitions tell us about life in the city of Ur?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Beliefs about Houses</h3><p>Omen tablets from Ur record superstitions about houses. For example, a raised threshold was believed to bring wealth, and a front door that did not open towards another house was considered lucky. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Family Dynamics</h3><p>Superstitions also reflected family dynamics. One belief was that if the main wooden door of a house opened outwards instead of inwards, the wife would be a torment to her husband. <span class="citation">(Source: p. 20)</span></p></div>
            </div>
             <button class="accordion"><span>4. What were the two main uses of writing in its early stages?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Record Keeping</h3><p>Writing began when society needed to keep records of transactions. The earliest tablets are lists of goods like oxen, fish, and bread loaves that were brought into or distributed from temples. <span class="citation">(Source: p. 13)</span></p></div>
                <div class="answer-point"><h3>Organisation of Trade</h3><p>The epic of Enmerkar shows that writing was used to organize long-distance trade. A king could send a clear, unalterable message to a ruler in a distant land, which was seen as a sign of superiority. <span class="citation">(Source: p. 15)</span></p></div>
            </div>
             <button class="accordion"><span>5. How did archaeologists identify different rooms and activities at Abu Salabikh?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Kitchens</h3><p>Plant seeds and fibre remained after dung cakes had been burned as fuel, and large quantities of charred fish bones were found swept into the streets. These discoveries helped identify kitchens. <span class="citation">(Source: p. 24)</span></p></div>
                <div class="answer-point"><h3>Living Rooms vs. Open Courtyards</h3><p>Living rooms were identified as those with fewer traces of outdoor activities. Archaeologists also made microscopic studies of room floors to decide which rooms were roofed and which were open to the sky. <span class="citation">(Source: p. 24)</span></p></div>
            </div>
        </div>

        <!-- SA2 QUESTIONS -->
        <div id="sa2" class="question-section">
            <h2>3-Marker Questions (Short Answer)</h2>
             <button class="accordion"><span>1. Describe the city of Mari as a trading town.</span><span class="most-likely">⭐ Most Likely</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Prime Location</h3><p>Mari was located on the Euphrates in a prime position for trade between the south of Mesopotamia and the mineral-rich uplands of Turkey, Syria, and Lebanon. <span class="citation">(Source: p. 24)</span></p></div>
                <div class="answer-point"><h3>Goods Traded</h3><p>It was a hub for trade in wood, copper, tin, oil, and wine. As bronze was the main industrial material, the trade in copper and tin was of great importance. <span class="citation">(Source: p. 24)</span></p></div>
                 <div class="answer-point"><h3>Source of Prosperity</h3><p>Officers in Mari would inspect the cargo of boats passing through and levy a charge of about one-tenth the value of the goods. This trade made the kingdom of Mari exceptionally prosperous, even though it was not militarily strong. <span class="citation">(Source: p. 24)</span></p></div>
            </div>
            <button class="accordion"><span>2. Why would the early temple have been much like a house?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Residence of a God</h3><p>The earliest temples were small shrines made of unbaked bricks. They were conceptually considered the 'house of a god', and so their basic plan was often not unlike an ordinary house. <span class="citation">(Source: p. 16)</span></p></div>
                <div class="answer-point"><h3>Centre of Community Life</h3><p>Like a household, the temple was a center of production and distribution. People brought produce to the temple, and activities like grain grinding and weaving were also done there, similar to activities in a large household. <span class="citation">(Source: p. 16)</span></p></div>
                <div class="answer-point"><h3>Distinctive Architectural Feature</h3><p>However, temples had a distinctive feature that set them apart: their outer walls always went in and out at regular intervals, which no ordinary building ever had. <span class="citation">(Source: p. 16)</span></p></div>
            </div>
            <button class="accordion"><span>3. What problems could arise from the natural and man-made use of the Euphrates river channels?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Natural Hazards</h3><p>The natural outlet channels of the Euphrates were prone to hazards. In one year, they could have too much water and flood the crops, while in another, they could change their course altogether, leading to the relocation of villages. <span class="citation">(Source: p. 16)</span></p></div>
                <div class="answer-point"><h3>Upstream Diversion</h3><p>Man-made problems also existed. Those who lived on the upstream stretches of a channel could divert so much water into their fields that villages downstream were left without any water for their crops. <span class="citation">(Source: p. 17)</span></p></div>
                 <div class="answer-point"><h3>Silt Blockage</h3><p>Upstream communities could also neglect to clean out the silt from their stretch of the channel. This would block the flow of water further down, causing conflict over water resources. <span class="citation">(Source: p. 17)</span></p></div>
            </div>
            <button class="accordion"><span>4. Describe the process of making and using a Mesopotamian clay tablet.</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Preparation of the Tablet</h3><p>A scribe would first wet a lump of clay and then pat it into a size that he could hold comfortably in one hand. He would then carefully smoothen its surfaces to prepare it for writing. <span class="citation">(Source: p. 14)</span></p></div>
                <div class="answer-point"><h3>Inscribing with Cuneiform</h3><p>While the clay was still moist, the scribe would use the sharp end of a reed, cut obliquely, to press wedge-shaped (cuneiform) signs onto the smoothened surface. <span class="citation">(Source: p. 14)</span></p></div>
                 <div class="answer-point"><h3>Drying and Permanence</h3><p>Once the writing was complete, the tablet was dried in the sun. The clay would harden, making the written record almost as indestructible as pottery. Once dried, signs could not be added or changed. <span class="citation">(Source: p. 14)</span></p></div>
            </div>
            <button class="accordion"><span>5. How did Assurbanipal build his library at Nineveh?</span><span class="plus-minus"></span></button>
            <div class="panel">
                 <div class="answer-point"><h3>Acknowledging Southern Culture</h3><p>The Assyrian king Assurbanipal acknowledged the southern region, Babylonia, as the center of high culture. He made great efforts to collect tablets on history, epics, omen literature, astrology, hymns, and poems. <span class="citation">(Source: p. 26)</span></p></div>
                <div class="answer-point"><h3>Dispatching Scribes</h3><p>He sent his own scribes south to find old tablets. Because southern scribes were trained by copying tablets, there were towns in Babylonia with huge collections that were famous. <span class="citation">(Source: p. 26)</span></p></div>
                <div class="answer-point"><h3>Copying and Cataloguing</h3><p>Copies were made of important texts like the Epic of Gilgamesh. His library had about 1,000 texts, amounting to some 30,000 tablets, which were grouped according to subject and catalogued with clay labels. <span class="citation">(Source: p. 26)</span></p></div>
            </div>
        </div>

        <!-- LA QUESTIONS -->
        <div id="la" class="question-section">
            <h2>4/5-Marker Questions (Long Answer)</h2>
             <button class="accordion"><span>1. Explain the significance and key features of urbanism in Mesopotamia.</span><span class="most-likely">⭐ Most Likely</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Economic Specialization</h3><p>Cities are not just large populations but places where economies develop in spheres other than food production. Urban economies comprise trade, manufactures, and services, leading to a cluster of population in towns. <span class="citation">(Source: p. 12)</span></p></div>
                <div class="answer-point"><h3>Division of Labour</h3><p>A fundamental mark of urban life is the division of labour. People specialize in a single craft or trade and depend on the products or services of others. For instance, a stone seal carver would not make his own bronze tools but would rely on a tool maker. <span class="citation">(Source: p. 12)</span></p></div>
                <div class="answer-point"><h3>Social Organisation</h3><p>Urban life necessitates a social organisation to function. Organised trade and storage are needed to bring fuel, metal, stones, and food from different places to city manufacturers and residents. This requires a system where some people give commands and others obey. <span class="citation">(Source: p. 12)</span></p></div>
                <div class="answer-point"><h3>Dependence on Trade</h3><p>As cities like those in southern Mesopotamia lacked many essential resources like metal, stone, and good quality wood, they were heavily dependent on long-distance trade with regions like Turkey and Iran. <span class="citation">(Source: p. 13)</span></p></div>
                 <div class="answer-point"><h3>Need for Written Records</h3><p>The coordination of many different activities, people, and goods in a city often requires the keeping of written records. Transactions occur at different times and involve various parties, making writing essential for management, a need which led to its invention around 3200 BCE. <span class="citation">(Source: pp. 12, 13)</span></p></div>
            </div>
            <button class="accordion"><span>2. Why do we say that it was not natural fertility and high levels of food production that were the sole causes of early urbanisation?</span><span class="variation">(Variation a)</span><span class="plus-minus"></span></button>
             <div class="panel">
                <div class="answer-point"><h3>Beyond Rural Prosperity</h3><p>The text explicitly states "let us not, however, make the mistake of thinking that cities grew simply because of rural prosperity." While productive agriculture was a necessary condition, it was not the only cause. <span class="citation">(Source: p. 11)</span></p></div>
                <div class="answer-point"><h3>Development of Other Spheres</h3><p>Urbanisation occurs when an economy develops in spheres other than food production, such as trade, manufacturing, and services. This economic diversification creates an advantage for people to cluster in towns. <span class="citation">(Source: p. 12)</span></p></div>
                <div class="answer-point"><h3>Lack of Resources</h3><p>Southern Mesopotamia, despite its agricultural wealth, lacked crucial resources like stones for tools, wood for carts, and metals. This scarcity necessitated organised trade to procure these materials, which was a major driver of urban development. <span class="citation">(Source: p. 13)</span></p></div>
                <div class="answer-point"><h3>Social Organisation and Leadership</h3><p>The need to organize foreign expeditions, direct trade, manage labor for public works like temples, and resolve conflicts over land and water required a strong social organization and leadership (kingship), which were hallmarks of city life. <span class="citation">(Source: pp. 13, 17)</span></p></div>
            </div>
            <button class="accordion"><span>3. What do ancient stories tell us about the civilisation of Mesopotamia?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Flood Myths and Historical Memory</h3><p>Stories like the flood myth, with the hero Ziusudra/Utnapishtim, similar to the Biblical Noah, show how Mesopotamians preserved memories of important historical changes, likely representing catastrophic river floods that reshaped their world. <span class="citation">(Source: p. 10, Margin Note)</span></p></div>
                <div class="answer-point"><h3>Kingship, Trade, and Writing</h3><p>The epic poem about Enmerkar of Uruk illustrates the Mesopotamian understanding that kingship was responsible for organizing trade and writing. It portrays writing as a sign of the superiority of Mesopotamian urban culture. <span class="citation">(Source: p. 15)</span></p></div>
                <div class="answer-point"><h3>Pride in Cities</h3><p>The Gilgamesh Epic demonstrates the immense pride Mesopotamians took in their cities. After failing to find immortality, Gilgamesh consoles himself by admiring the city wall of Uruk, a lasting achievement of his people, showing that the city itself was a source of collective identity and legacy. <span class="citation">(Source: p. 25)</span></p></div>
                <div class="answer-point"><h3>Value of Scholarly Tradition</h3><p>The story of Assurbanipal's library shows that later Mesopotamian kings valued and consciously preserved the intellectual traditions of the past, including history, epics, and scholarly texts from a much earlier time. <span class="citation">(Source: p. 26)</span></p></div>
            </div>
             <button class="accordion"><span>4. Describe the Palace at Mari of King Zimrilim.</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>A Multifunctional Hub</h3><p>The great palace at Mari was the residence of the royal family, the hub of administration, and a place of production, especially for precious metal ornaments. It was so famous that a king from north Syria visited just to see it. <span class="citation">(Source: p. 23)</span></p></div>
                 <div class="answer-point"><h3>Sprawling Structure</h3><p>The palace was a sprawling structure with 260 rooms, covering an area of 2.4 hectares. It had only one entrance on the north, leading to large, beautifully paved open courtyards like courtyard 131. <span class="citation">(Source: p. 23)</span></p></div>
                 <div class="answer-point"><h3>Reception and Daily Life</h3><p>The king would receive foreign dignitaries and his own people in Room 132, which was decorated with wall paintings. Daily lists reveal that huge quantities of food, including flour, meat, fish, beer, and wine, were presented for the king's table each day. <span class="citation">(Source: p. 23)</span></p></div>
                 <div class="answer-point"><h3>Administrative Centre</h3><p>The palace housed scribes' offices with benches and clay bins for storing tablets, highlighting its role as the administrative heart of the kingdom. <span class="citation">(Source: p. 22, Illustration)</span></p></div>
            </div>
             <button class="accordion"><span>5. How has our understanding of Mesopotamian history evolved since the 19th century?</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Initial Motivation: Proving the Bible</h3><p>In the 19th century, European interest in Mesopotamia was fueled by the Old Testament. Early archaeology was driven by an attempt to prove the literal truth of Biblical stories, such as the Great Flood. <span class="citation">(Source: p. 9)</span></p></div>
                <div class="answer-point"><h3>Shift in Understanding (1960s)</h3><p>By the 1960s, it was understood that Old Testament stories were not literally true but ways of expressing memories about important historical changes. The focus on proving Biblical narratives receded. <span class="citation">(Source: p. 10)</span></p></div>
                <div class="answer-point"><h3>Methodological Sophistication</h3><p>Archaeological techniques became far more sophisticated and refined over time. Modern excavators have much higher standards of accuracy and care in recording data than in the early days. <span class="citation">(Source: pp. 10, 24)</span></p></div>
                 <div class="answer-point"><h3>New Research Questions</h3><p>Attention shifted to different questions, including reconstructing the lives of ordinary people. Instead of digging huge areas, archaeologists began focusing on smaller sites and using techniques like sieving to recover plant and animal remains to understand daily life. <span class="citation">(Source: pp. 10, 24)</span></p></div>
            </div>
        </div>

        <!-- ESSAY QUESTIONS -->
        <div id="essay" class="question-section">
            <h2>8-Marker Questions (Essay Type)</h2>
             <button class="accordion"><span>1. Describe the features of early urban society in Mesopotamia, focusing on the roles of temples and kings in its development.</span><span class="most-likely">⭐ Most Likely</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Emergence of Cities from Settlements</h3><p>From 5000 BCE, settlements began to develop in southern Mesopotamia. The earliest cities emerged from some of these settlements, gradually developing around institutions like temples or as centres of trade. <span class="citation">(Source: p. 16)</span></p></div>
                 <div class="answer-point"><h3>The Temple as an Economic and Religious Hub</h3><p>Early temples were small shrines of unbaked brick, considered the residence of a god. They became the focus of worship and expanded into large economic institutions that organised production, owned agricultural fields, employed merchants, and kept written records. <span class="citation">(Source: p. 16)</span></p></div>
                 <div class="answer-point"><h3>Rise of Kingship from Conflict</h3><p>The early Mesopotamian countryside saw repeated conflict over land and water. Successful war leaders could oblige followers by distributing loot and taking prisoners as servants. This leadership became permanent when it provided stability and increased the community's well-being. <span class="citation">(Source: p. 17)</span></p></div>
                <div class="answer-point"><h3>King's Role in Temple Beautification and Trade</h3><p>Victorious chiefs began to offer precious booty to the gods, thus beautifying the community's temples. They also sent men out to fetch fine stones and metal for the benefit of the god and community, organizing trade and giving the king high status and authority. <span class="citation">(Source: p. 17)</span></p></div>
                <div class="answer-point"><h3>Mutual Reinforcement and Population Shift</h3><p>A cycle developed where leaders encouraged villagers to settle close to them for safety and for rapid mobilization of an army. This led to major population shifts; for example, around 3000 BCE, dozens of small villages were deserted as the city of Uruk grew to an enormous size. <span class="citation">(Source: p. 17)</span></p></div>
                 <div class="answer-point"><h3>Organisation of Compulsory Labour</h3><p>War captives and local people were put to work for the temple or directly for the ruler. This labour was compulsory and was paid in rations, the records of which have been found in hundreds of lists. This workforce undertook massive construction projects. <span class="citation">(Source: p. 18)</span></p></div>
                <div class="answer-point"><h3>Technological Advancement under Rulers</h3><p>With rulers commanding large-scale projects, technical advances occurred at Uruk around 3000 BCE. Bronze tools came into wide use for various crafts, and architects learned to construct large halls with brick columns. <span class="citation">(Source: p. 18)</span></p></div>
                 <div class="answer-point"><h3>Emergence of a Ruling Elite</h3><p>A small section of society, the ruling elite, came to possess a major share of the wealth. This is made clear by the enormous riches, such as jewellery, gold vessels, and ceremonial daggers, that were buried with some kings and queens at Ur. <span class="citation">(Source: p. 19)</span></p></div>
            </div>
             <button class="accordion"><span>2. Discuss the legacy of Mesopotamia to the world, particularly in the fields of time reckoning, mathematics, and scholarly tradition.</span><span class="most-likely">⭐ Most Likely</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Division of the Year and Month</h3><p>A major legacy is the division of the year into 12 months according to the revolution of the moon around the earth. They also divided the month into four weeks, creating a foundational calendar system. <span class="citation">(Source: p. 25)</span></p></div>
                <div class="answer-point"><h3>Division of the Day and Hour</h3><p>The Mesopotamians are credited with dividing the day into 24 hours, and the hour into 60 minutes. This sexagesimal (base 60) system for time is a direct inheritance that we take for granted in our daily lives. <span class="citation">(Source: p. 25)</span></p></div>
                <div class="answer-point"><h3>Advanced Mathematical Tables</h3><p>Tablets from around 1800 BCE show their advanced mathematical knowledge. These include multiplication and division tables, tables of square and square-roots, and tables of compound interest. <span class="citation">(Source: p. 25)</span></p></div>
                <div class="answer-point"><h3>Complex Problem Solving</h3><p>They could solve complex mathematical problems. For example, they calculated the square root of 2 with remarkable accuracy (1.41421296) and could solve problems involving the calculation of volumes. <span class="citation">(Source: p. 25)</span></p></div>
                <div class="answer-point"><h3>Astronomical Observation</h3><p>They kept detailed written records of astronomical phenomena. Whenever solar and lunar eclipses were observed, their occurrence was noted according to the year, month, and day. They also recorded the positions of stars and constellations. <span class="citation">(Source: p. 25)</span></p></div>
                 <div class="answer-point"><h3>The Importance of Writing for Science</h3><p>None of these achievements would have been possible without writing. Science requires written texts that generations of scholars can read and build upon, allowing for the cumulative growth of knowledge. <span class="citation">(Source: p. 25)</span></p></div>
                 <div class="answer-point"><h3>Urban Institution of Schools</h3><p>Their legacy was preserved and developed through the urban institution of schools. In these schools, students were trained not just as record keepers, but as intellectuals who could build on the work of their predecessors. <span class="citation">(Source: p. 26)</span></p></div>
                <div class="answer-point"><h3>Transmission to Other Cultures</h3><p>These time divisions and mathematical concepts were adopted by the successors of Alexander the Great. From there, they were transmitted to the Roman world, then to the world of Islam, and eventually to medieval Europe. <span class="citation">(Source: p. 25)</span></p></div>
            </div>
             <button class="accordion"><span>3. 'The development of writing was a crucial factor in the growth and administration of Mesopotamian cities.' Elaborate.</span><span class="variation">(Variation of previous question)</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Record Keeping for Transactions</h3><p>Writing clearly began when society needed to keep records of transactions. In complex city life, transactions occurred at different times and involved many people and a variety of goods, making verbal communication insufficient. The first tablets were lists of goods distributed from temples. <span class="citation">(Source: p. 13)</span></p></div>
                <div class="answer-point"><h3>Administration of Temples and Rulers</h3><p>Temples developed into major urban institutions, acting as employers and distributors of resources. They needed written records of distributions and allotments of grain, plough animals, etc. Likewise, rulers needed to keep track of compulsory labor, which was paid in rations, and hundreds of ration lists have been found. <span class="citation">(Source: pp. 16, 18)</span></p></div>
                <div class="answer-point"><h3>Facilitating Long-Distance Trade</h3><p>The epic of Enmerkar demonstrates how writing was essential for organizing trade. A written tablet could carry complex messages, threats, and promises over long distances without getting mixed up, making it a powerful tool for kings to direct foreign expeditions. <span class="citation">(Source: p. 15)</span></p></div>
                <div class="answer-point"><h3>Establishing Legal Validity</h3><p>By 2600 BCE, writing was used for giving legal validity to land transfers. This created a permanent and verifiable record of ownership, which was crucial for social order and resolving disputes in a densely populated urban environment. <span class="citation">(Source: p. 14)</span></p></div>
                <div class="answer-point"><h3>Recording Laws and Royal Deeds</h3><p>Writing was used for narrating the deeds of kings and for announcing the changes a king had made in the customary laws of the land. This helped in consolidating the king's authority and communicating laws to the populace. <span class="citation">(Source: p. 14)</span></p></div>
                <div class="answer-point"><h3>Intellectual Development</h3><p>The existence of writing led to the creation of schools, where scribes were trained. This allowed for the development of scholarly traditions, such as mathematics and astronomy, as knowledge could be recorded, copied, and built upon by successive generations. <span class="citation">(Source: p. 26)</span></p></div>
                <div class="answer-point"><h3>Cultural Identity and Superiority</h3><p>Writing was seen as a sign of the superiority of Mesopotamian urban culture. The ability to send written messages was a mark of the sophisticated organization centered in the city and under the command of the king. <span class="citation">(Source: p. 16)</span></p></div>
                <div class="answer-point"><h3>Preserving History and Literature</h3><p>Writing allowed for the recording of epics like Gilgamesh and the preservation of historical events. This created a shared cultural heritage and memory that was central to Mesopotamian identity and allowed later kings like Assurbanipal to create libraries of past traditions. <span class="citation">(Source: pp. 25, 26)</span></p></div>
            </div>
             <button class="accordion"><span>4. Describe life in the city of Ur, focusing on its town planning, domestic architecture, and social customs.</span><span class="plus-minus"></span></button>
            <div class="panel">
                <div class="answer-point"><h3>Lack of Town Planning</h3><p>Ur was a town whose ordinary houses were systematically excavated. It featured narrow, winding streets and irregularly shaped house plots, indicating an absence of modern town planning. This meant wheeled carts could not have reached many houses. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Street Conditions</h3><p>There were no street drains like those in Mohenjo-daro. People seem to have swept all their household refuse into the streets. This caused street levels to rise over time, and house thresholds had to be raised so that mud would not flow inside after rains. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Domestic Architecture</h3><p>Houses had an internal drainage system, with pipes leading to sumps in inner courtyards. This prevented the streets from becoming slushy. Light came into rooms not from windows, but from doorways opening into the courtyards, which also gave families privacy. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Social Customs: Marriage</h3><p>Legal texts show the nuclear family was the norm. For a marriage, a declaration of willingness was made, gifts were exchanged, and the couple ate together and made offerings in a temple. The bride received her inheritance from her father. <span class="citation">(Source: pp. 19-20)</span></p></div>
                <div class="answer-point"><h3>Social Customs: Inheritance</h3><p>The father's house, herds, fields, and other properties were inherited by the sons. The bride's inheritance was separate and given by her own father. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Beliefs and Superstitions</h3><p>Omen tablets found at Ur reveal superstitions about houses. For example, a raised threshold was believed to bring wealth, while a front door that opened outwards was thought to make a wife a torment to her husband. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Burial Practices</h3><p>There was a town cemetery at Ur where graves of royalty and commoners have been found. However, a few individuals were also found buried under the floors of ordinary houses. <span class="citation">(Source: p. 20)</span></p></div>
                <div class="answer-point"><h3>Social Stratification</h3><p>The burials of kings and queens at Ur contained enormous riches (jewellery, gold vessels, etc.), which makes it clear that a small ruling elite had a major share of the wealth compared to ordinary people. <span class="citation">(Source: p. 19)</span></p></div>
            </div>
            <button class="accordion"><span>5. Analyse the relationship between pastoralists and settled agriculturalists in the kingdom of Mari.</span><span class="plus-minus"></span></button>
            <div class="panel">
                 <div class="answer-point"><h3>Geographical Setting</h3><p>The kingdom of Mari, which flourished after 2000 BCE, was located further upstream on the Euphrates, not in the productive southern plains. Most of its territory was used for pasturing sheep and goats, leading to close interaction between farmers and herders. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Economic Interdependence (Symbiosis)</h3><p>There was a symbiotic relationship. Herders needed to exchange young animals, cheese, leather, and meat for grain, metal tools, and other goods from settled communities. Furthermore, the manure of a penned flock was of great use to a farmer as fertilizer. <span class="citation">(Source: p. 21)</span></p></div>
                 <div class="answer-point"><h3>Sources of Conflict: Land and Water</h3><p>Conflict could arise. A shepherd might take his flock to water across a sown field, ruining the crop. Conversely, settled groups might deny pastoralists access to river and canal water along certain paths. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Raids by Mobile Herdsmen</h3><p>Herders, being mobile, could raid agricultural villages and seize their stored goods. This mobility made them a potential threat to the stability of the settled communities. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Integration and Rise to Power</h3><p>Throughout Mesopotamian history, nomadic communities filtered into the agricultural heartland. They came as herders, harvest labourers, or hired soldiers. A few gained the power to establish their own rule, including the Akkadians, Amorites, Assyrians, and Aramaeans. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Amorite Kings of Mari</h3><p>The kings of Mari were Amorites, a pastoralist group. Their dress differed from the original inhabitants, and while they respected Mesopotamian gods, they also raised a temple for Dagan, god of the steppe, showing a blend of cultures. <span class="citation">(Source: p. 21)</span></p></div>
                <div class="answer-point"><h3>Vigilance and State Control</h3><p>The kings of Mari had to be vigilant. Herders were allowed to move within the kingdom but they were watched. Letters between kings and officials frequently mention the camps of herders and the need to monitor their movements for potential raids. <span class="citation">(Source: p. 24)</span></p></div>
                <div class="answer-point"><h3>A Vital Intermixture</h3><p>The text concludes that Mesopotamian society and culture were open to different peoples and cultures, and the vitality of the civilisation was perhaps due to this very intermixture between nomadic and settled peoples. <span class="citation">(Source: p. 21)</span></p></div>
            </div>
        </div>
        
    </div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(e) {
            e.stopPropagation();
            var isActive = this.classList.contains("active");
            
            // Close all panels
            for (var j = 0; j < acc.length; j++) {
                acc[j].classList.remove("active");
                if (acc[j].nextElementSibling) {
                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }

            // Open the clicked panel if it wasn't already active
            if (!isActive) {
                this.classList.add("active");
                var panel = this.nextElementSibling;
                if (panel) {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Adjust for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
</script>

</body>
</html>

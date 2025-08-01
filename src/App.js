import React, { useState } from 'react';
import './App.css';

// Data for Chapter 1
const chapter1TopicsData = [
  {
    id: 'what-is-constitution',
    title: 'What is a Constitution?',
    emoji: '💡',
    child: {
      details: [
        {
          heading: "What is it like?",
          paragraph: "Think of it as the main rulebook for a country, like the rules for a big game or a school. It's the most important set of rules that everyone agrees to follow."
        },
        {
          heading: "What does it do?",
          paragraph: "It tells everyone how the country should be run, what the government can and cannot do, and what basic rights people have. It makes sure everything is organized and fair."
        }
      ],
      summary_paragraph: "A constitution is the most important set of rules for a country. It makes sure everything is organized and fair for everyone."
    },
    exam: {
      details: [
        {
          heading: "Foundational Document comprising fundamental principles",
          paragraph: "It is the core document that outlines the fundamental principles and laws of a nation, serving as its legal and philosophical blueprint."
        },
        {
          heading: "Defines Government Structure and Allocates Powers",
          paragraph: "It precisely defines how the government is organized, including its branches (like law-making, executing, and judging) and systematically allocates specific powers to each, ensuring a clear division of authority."
        },
        {
          heading: "Establishes Rights and Duties of Citizens",
          paragraph: "A constitution enumerates the fundamental rights that citizens possess, protecting their liberties, and often outlines their corresponding duties and responsibilities towards the state."
        },
        {
          heading: "Serves as the Supreme Law of the Land",
          paragraph: "It is the highest law in the country, meaning all other laws, policies, and governmental actions must conform to its provisions, ensuring legal consistency and constitutional supremacy."
        }
      ],
      summary_paragraph: "A constitution is a foundational document that outlines the fundamental principles according to which a state is constituted and governed. It precisely defines the structure of governmental institutions, systematically allocates powers among them, and establishes the rights, responsibilities, and duties of its citizens. Crucially, it stands as the supreme law of the land, providing the legal and philosophical framework for governance and societal order."
    }
  },
  {
    id: 'functions-of-constitution',
    title: 'Functions of a Constitution',
    emoji: '🛠️',
    child: {
      details: [
        {
          heading: "Helps everyone live together",
          paragraph: "It sets basic rules so that people with different ideas and backgrounds can live peacefully without too much fighting."
        },
        {
          heading: "Decides who makes decisions",
          paragraph: "It clearly explains who has the power to make laws and how leaders for the country are chosen."
        },
        {
          heading: "Protects your rights",
          paragraph: "It stops the government from being unfair to people and gives everyone basic freedoms, like the freedom to speak or believe what they want."
        },
        {
          heading: "Guides the country's progress",
          paragraph: "It helps the government work towards making life better for everyone, like ensuring good education, healthcare, and fairness for all."
        },
        {
          heading: "Gives people a shared identity",
          paragraph: "It helps everyone in the country feel connected as one group and share common values and beliefs."
        }
      ],
      summary_paragraph: "A constitution does many important jobs to make sure a country is run fairly and peacefully, protecting its people and guiding its future."
    },
    exam: {
      details: [
        {
          heading: "Coordination and Assurance",
          paragraph: "By providing a set of publicly known and enforceable rules, a constitution ensures a minimal degree of coordination among diverse members of society, fostering predictability and security."
        },
        {
          heading: "Specification of Decision-Making Powers",
          paragraph: "It precisely delineates the basic allocation of power within a society, determining who has the authority to enact laws and how the government's various institutions are constituted."
        },
        {
          heading: "Limitations on Government Powers",
          paragraph: "A constitution sets fundamental boundaries on what a government can impose on its citizens, typically through the enumeration of fundamental rights that cannot be trespassed, thereby safeguarding individual liberties."
        },
        {
          heading: "Aspirations and Goals of a Society",
          paragraph: "Modern constitutions, particularly like India's, provide an enabling framework for the government to actively pursue positive societal goals and aspirations, such as overcoming inequalities and promoting welfare, often articulated in the Preamble and Directive Principles of State Policy."
        },
        {
          heading: "Fundamental Identity of a People",
          paragraph: "It expresses the collective political and moral identity of a people by establishing a basic set of norms for governance, defining shared values, and fostering a sense of national unity and belonging."
        }
      ],
      summary_paragraph: "The functions of a constitution are multifaceted and critical for a stable society. Firstly, it ensures coordination and assurance by providing a universally known and enforceable set of basic rules, fostering peaceful coexistence among diverse groups. Secondly, it specifies decision-making powers, clearly defining who holds authority to enact laws and how the government's various institutions are constituted. Thirdly, it imposes fundamental limitations on governmental power, primarily through the establishment of fundamental rights, which serve as inviolable safeguards for citizens' liberties. Fourthly, modern constitutions, like India's, provide an enabling framework for the government to actively pursue societal aspirations and goals, such as social justice and welfare, often articulated in the Preamble and Directive Principles of State Policy. Lastly, a constitution expresses the fundamental identity of a people, defining their collective political and moral values and fostering a shared national identity."
    }
  },
  {
    id: 'authority-of-constitution',
    title: 'Authority of a Constitution: What Makes it Effective?',
    emoji: '👑',
    child: {
      details: [
        {
          heading: "Who made it?",
          paragraph: "If the people who wrote the constitution were trusted and respected by everyone, then more people will believe in it and follow its rules."
        },
        {
          heading: "Is it fair to everyone?",
          paragraph: "A good constitution has rules that are fair to all groups of people, so no one feels left out or treated badly."
        },
        {
          heading: "Is it designed smartly?",
          paragraph: "The constitution should spread power among different parts of the government (like law-makers, police, and judges) so no one part becomes too powerful. It also needs to be able to change a little bit over time if needed, but not too much."
        }
      ],
      summary_paragraph: "A constitution works best when trusted people create fair rules and design the government smartly so it can adapt and stay strong."
    },
    exam: {
      details: [
        {
          heading: "Mode of Promulgation",
          paragraph: "The effectiveness of a constitution is significantly determined by how it came into being, particularly the credibility and popular backing of its framers, which ensures broad public acceptance and legitimacy."
        },
        {
          heading: "Substantive Provisions",
          paragraph: "Must contain provisions that genuinely ensure freedom and equality for all its members, preventing any systematic oppression or undue privilege, thereby commanding the voluntary allegiance of the populace."
        },
        {
          heading: "Balanced Institutional Design",
          paragraph: "This involves intelligently fragmenting governmental power across various institutions (e.g., Legislature, Executive, Judiciary) through a robust system of checks and balances to prevent subversion. It also necessitates striking an optimal balance between constitutional rigidity and flexibility to allow for adaptation to changing needs without losing its core identity."
        }
      ],
      summary_paragraph: "The authority and effectiveness of a constitution depend on three critical factors. Firstly, the mode of promulgation is vital; successful constitutions are typically crafted by credible leaders emerging from popular national movements, thereby garnering widespread public acceptance and legitimacy. Secondly, the substantive provisions of the constitution must be inherently just, preserving the freedom and equality of all citizens and avoiding any systematic privileging or oppression of groups, which ensures voluntary allegiance. Lastly, a balanced institutional design is paramount. This involves intelligently fragmenting power across various governmental branches (e.g., Legislature, Executive, Judiciary) through a robust system of checks and balances, thereby preventing any single entity from monopolizing power and subverting the constitution. Furthermore, it must strike an optimal balance between being rigid enough to provide stability and flexible enough to adapt to evolving societal needs."
    }
  },
  {
    id: 'how-constitution-made',
    title: 'How was the Indian Constitution Made?',
    emoji: '🏗️',
    child: {
      details: [
        {
          heading: "Who wrote it?",
          paragraph: "A special group called the Constituent Assembly wrote it. They were chosen from different parts of India and worked for almost three years!"
        },
        {
          heading: "How they worked",
          paragraph: "They talked and debated a lot about every single rule. They made sure to listen to everyone's ideas. One big decision they made easily was that every adult could vote."
        },
        {
          heading: "Ideas from the freedom fight",
          paragraph: "The main ideas for the constitution, like wanting justice and fairness, came from India's long struggle to become free from British rule."
        }
      ],
      summary_paragraph: "The Indian Constitution was carefully put together by a special assembly that debated thoroughly and used ideas from India's fight for independence."
    },
    exam: {
      details: [
        {
          heading: "Constituent Assembly",
          paragraph: "The Indian Constitution was formally framed by the Constituent Assembly, indirectly elected between December 9, 1946, and November 26, 1949. Its composition reflected the Cabinet Mission Plan's proportional representation, ensuring broad inclusivity despite the Partition, which reduced its members to 299."
        },
        {
          heading: "Principle of Deliberation",
          paragraph: "The Assembly's authority was rooted in its commitment to 'public reason' and extensive, reasoned debates on fundamental issues like federalism and the judiciary. A notable testament to its democratic commitment was the adoption of universal adult suffrage with minimal debate, while other matters underwent detailed scrutiny by eight major committees."
        },
        {
          heading: "Inheritance of Nationalist Movement",
          paragraph: "The core principles and aspirations enshrined in the Constitution were deeply forged during India's long struggle for freedom. The Objectives Resolution, moved by Jawaharlal Nehru in 1946, served as a pivotal document, encapsulating these foundational values of sovereignty, justice, equality, liberty, and democracy, providing the moral commitment for the new nation."
        }
      ],
      summary_paragraph: "The Indian Constitution was meticulously crafted by the Constituent Assembly, which was indirectly elected by the Provincial Legislative Assemblies. It commenced its first sitting on December 9, 1946, and, following the Partition, reassembled for divided India on August 14, 1947. Its composition, based on the Cabinet Mission Plan's proportional representation, ensuring broad inclusivity despite the reduction to 299 members post-Partition. The Assembly's authority stemmed significantly from its commitment to deliberation and 'public reason.' Members engaged in extensive, reasoned debates on virtually every fundamental issue, with universal adult suffrage being a notable exception, adopted with minimal discussion. The Constitution's core principles were deeply rooted in the decades-long nationalist movement, with the Objectives Resolution, moved by Jawaharlal Nehru in 1946, serving as a pivotal document that encapsulated the foundational values of sovereignty, justice, equality, and liberty."
    }
  },
  {
    id: 'objectives-resolution',
    title: 'Main Points of the Objectives Resolution',
    emoji: '🌟',
    child: {
      details: [
        {
          heading: "India as a free country",
          paragraph: "It said India would be a completely free and independent country, not ruled by anyone else."
        },
        {
          heading: "All parts united",
          paragraph: "It planned for India to be a union of all its different states and territories, working together."
        },
        {
          heading: "Power from the people",
          paragraph: "It clearly stated that all the power in India would come from its people, meaning they are in charge."
        },
        {
          heading: "Fair for everyone",
          paragraph: "It promised that all people in India would have justice, be treated equally, and have basic freedoms like speaking their mind."
        },
        {
          heading: "Protect smaller groups",
          paragraph: "It made sure that minorities and groups who were not as strong would be protected and looked after."
        },
        {
          heading: "Work for world peace",
          paragraph: "It said that India would help promote peace and well-being for everyone around the world."
        }
      ],
      summary_paragraph: "The Objectives Resolution was a big promise of what India would be: a free, united country where people are treated fairly, and it helps bring peace to the world."
    },
    exam: {
      details: [
        {
          heading: "Independent, Sovereign, Republic",
          paragraph: "The Resolution declared India's future status as a completely independent, self-governing republic, free from external control."
        },
        {
          heading: "Union of Territories",
          paragraph: "It proposed the formation of a Union comprising all British Indian territories, Indian States, and any other regions willing to accede, establishing a unified national entity."
        },
        {
          heading: "Power from the People",
          paragraph: "A foundational principle was that all governmental power and authority would ultimately emanate from the people, signifying popular sovereignty."
        },
        {
          heading: "Guaranteed Justice & Freedoms",
          paragraph: "It committed to securing social, economic, and political justice, equality of status and opportunity, and fundamental freedoms (e.g., speech, belief, association) for all citizens, subject to law and public morality."
        },
        {
          heading: "Safeguards for Minorities",
          paragraph: "The Resolution specifically mandated adequate safeguards for minorities, backward and tribal areas, and other depressed classes, ensuring their protection and inclusion."
        },
        {
          heading: "Territorial Integrity",
          paragraph: "It pledged to maintain the territorial integrity of the Republic and its sovereign rights on land, sea, and air, in accordance with justice and international law."
        },
        {
          heading: "World Peace",
          paragraph: "India committed to making a full and willing contribution to the promotion of global peace and the welfare of mankind, reflecting its international outlook."
        }
      ],
      summary_paragraph: "The Objectives Resolution, moved by Jawaharlal Nehru in 1946, served as the philosophical bedrock and guiding principles for the Indian Constitution. It declared India to be an independent, sovereign republic and envisioned it as a Union comprising erstwhile British Indian territories, Indian States, and other willing parts, with constituent units retaining autonomy over powers not assigned to the Union. Crucially, it affirmed that all power and authority would emanate from the people. The Resolution guaranteed social, economic, and political justice, equality of status and opportunity, and fundamental freedoms (such as speech, expression, and belief) for all citizens, subject to law and public morality. It also mandated adequate safeguards for minorities, backward, and tribal areas. Furthermore, it committed to maintaining India's territorial integrity according to justice and international law, and pledged India's full contribution to the promotion of world peace and human welfare."
    }
  },
  {
    id: 'institutional-arrangements',
    title: 'Institutional Arrangements & Borrowed Provisions',
    emoji: '🌐',
    child: {
      details: [
        {
          heading: "How the government is set up",
          paragraph: "The constitution decided on a system where the Parliament makes laws, and power is shared between the main government in Delhi and the governments in each state."
        },
        {
          heading: "Ideas from other countries",
          paragraph: "The people who wrote our constitution looked at the best ideas from other countries' constitutions. They didn't just copy, but picked what worked best for India."
        },
        {
          heading: "Examples of borrowed ideas",
          paragraph: "For example, they got ideas about basic rights from the USA, how Parliament works from Britain, and rules about what the government should try to achieve (Directive Principles) from Ireland."
        }
      ],
      summary_paragraph: "India's government structure was carefully planned, and many good ideas were adapted from other countries to fit India's needs."
    },
    exam: {
      details: [
        {
          heading: "Balanced Governmental Arrangements",
          paragraph: "The Constituent Assembly adopted a parliamentary form of government and a federal arrangement, meticulously distributing powers horizontally (Legislature, Executive, Judiciary) and vertically (Union and States) to ensure a balanced and effective governance structure."
        },
        {
          heading: "Provisions Adapted from Other Countries",
          paragraph: "The framers judiciously borrowed and adapted provisions from various global constitutional traditions, a testament to their wide learning and pragmatic approach, ensuring suitability to the Indian context rather than mere imitation."
        },
        {
          heading: "Key Adaptations from British Constitution",
          paragraph: "India adopted the 'First Past the Post' electoral system, the Parliamentary Form of Government, the concept of the Rule of Law, the institution and role of the Speaker, and the law-making procedure from the British Constitution."
        },
        {
          heading: "Key Adaptations from Irish Constitution",
          paragraph: "The concept of Directive Principles of State Policy, which are guiding principles for the state to promote welfare, was inspired by the Irish Constitution."
        },
        {
          heading: "Key Adaptations from French Constitution",
          paragraph: "The ideals of Liberty, Equality, and Fraternity, enshrined in the Preamble, were drawn from the principles of the French Revolution."
        },
        {
          heading: "Key Adaptations from United States Constitution",
          paragraph: "The Charter of Fundamental Rights, the power of Judicial Review, and the independence of the judiciary were significantly influenced by the United States Constitution."
        },
        {
          heading: "Key Adaptations from Canadian Constitution",
          paragraph: "India adopted a quasi-federal form of government, characterized by a federal system with a strong central government, and the idea of Residual Powers (powers not explicitly listed for either central or state governments) from the Canadian Constitution."
        }
      ],
      summary_paragraph: "The Constituent Assembly meticulously designed the institutional arrangements to establish a democratic and welfare-oriented government. This involved adopting a parliamentary form of government and a federal arrangement, which strategically distributed powers both horizontally (among the Legislature, Executive, and Judiciary) and vertically (between the Union and State governments). Furthermore, the framers, demonstrating remarkable foresight and learning, judiciously borrowed and adapted numerous provisions from various constitutional traditions worldwide. This was not a slavish imitation but a careful selection and modification to suit India's unique problems and aspirations. Notable adaptations include principles like 'First Past the Post' and the parliamentary system from the British Constitution, Directive Principles of State Policy from the Irish Constitution, the ideals of Liberty, Equality, and Fraternity from the French Constitution, Fundamental Rights and Judicial Review from the United States Constitution, and a quasi-federal structure with residual powers from the Canadian Constitution."
    }
  }
];

// Data for Chapter 1's Question Bank page
const chapter1QuestionBank = [
  {
    category: 'MCQ (1 Mark)',
    questions: [
      {
        question: "The first function of a constitution is to:",
        options: [
          "A. provide a set of basic rules for coordination.",
          "B. limit the power of the government.",
          "C. give an identity to the people.",
          "D. distribute power among different institutions."
        ],
        answer: "A"
      },
      {
        question: "The Indian Constitution was formally created by:",
        options: [
          "A. The Indian Parliament.",
          "B. The British Government.",
          "C. The Constituent Assembly.",
          "D. A referendum of the people."
        ],
        answer: "C"
      },
      {
        question: "The idea of 'Directive Principles of State Policy' was borrowed from which country's constitution?",
        options: [
          "A. United States Constitution.",
          "B. British Constitution.",
          "C. Irish Constitution.",
          "D. French Constitution."
        ],
        answer: "C"
      },
      {
        question: "Which Resolution encapsulated the aspirations and values behind the Indian Constitution?",
        options: [
          "A. The Independence Resolution.",
          "B. The Objectives Resolution.",
          "C. The Preamble Resolution.",
          "D. The Fundamental Rights Resolution."
        ],
        answer: "B"
      },
      {
        question: "The Constituent Assembly held its first sitting on:",
        options: [
          "A. 15 August 1947.",
          "B. 26 January 1950.",
          "C. 9 December 1946.",
          "D. 26 November 1949."
        ],
        answer: "C"
      },
      {
        question: "Which of the following is not a function of a constitution mentioned in the chapter?",
        options: [
          "A. Specifying decision-making powers.",
          "B. Limiting the government's power.",
          "C. Ensuring that good people come to power.",
          "D. Expressing aspirations of a society."
        ],
        answer: "C"
      },
      {
        question: "The 'First Past the Post' electoral system was borrowed from:",
        options: [
          "A. The United States Constitution.",
          "B. The British Constitution.",
          "C. The Canadian Constitution.",
          "D. The French Constitution."
        ],
        answer: "B"
      },
      {
        question: "How many members were there in the Constituent Assembly after the Partition?",
        options: [
          "A. 389.",
          "B. 299.",
          "C. 284.",
          "D. 350."
        ],
        answer: "B"
      },
      {
        question: "The principle of deliberation in the Constituent Assembly meant that members:",
        options: [
          "A. Voted on all issues without debate.",
          "B. Protected their own personal interests.",
          "C. Emphasized discussion and reasoned argument.",
          "D. Agreed to a consensus on all matters immediately."
        ],
        answer: "C"
      },
      {
        question: "The Indian Constitution is described as a 'living document' because it:",
        options: [
          "A. Is written on paper.",
          "B. Can be easily changed by the government.",
          "C. Strikes a balance between preserving core values and adapting to new circumstances.",
          "D. Was framed by living leaders."
        ],
        answer: "C"
      },
    ]
  },
  {
    category: '1-Marker Questions',
    questions: [
      {
        question: "What is the first function of a constitution?",
        answer: [
          {
            heading: "Coordination and Assurance",
            paragraph: "The first function of a constitution is to provide a set of basic rules that allow for minimal coordination amongst members of a society and give them an assurance that others will follow these rules."
          }
        ]
      },
      {
        question: "Which part of the Indian Constitution outlines the aspirations of the society?",
        answer: [
          {
            heading: "Preamble and Directive Principles",
            paragraph: "The aspirations of Indian society are outlined in the Preamble to the Constitution, as well as in the Directive Principles of State Policy, which enable the government to take positive welfare measures."
          }
        ]
      },
      {
        question: "When did the Indian Constitution come into force?",
        answer: [
          {
            heading: "Date of Enforcement",
            paragraph: "The Indian Constitution came into force on 26 January 1950, a date which is celebrated as Republic Day."
          }
        ]
      },
      {
        question: "What is meant by a 'living document' in the context of the Indian Constitution?",
        answer: [
          {
            heading: "Adaptation to New Circumstances",
            paragraph: "The Indian Constitution is called a 'living document' because it strikes a right balance between preserving core values and allowing for enough flexibility to adapt to changing needs and circumstances of society."
          }
        ]
      },
      {
        question: "From which country was the idea of 'First Past the Post' borrowed?",
        answer: [
          {
            heading: "British Constitution",
            paragraph: "The 'First Past the Post' electoral system, which is a key part of India's electoral process, was adopted from the British Constitution."
          }
        ]
      },
      {
        question: "Who was the Chairman of the Drafting Committee of the Indian Constitution?",
        answer: [
          {
            heading: "Dr. B.R. Ambedkar",
            paragraph: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee, a key committee of the Constituent Assembly responsible for drafting the Constitution."
          }
        ]
      },
      {
        question: "What was the total number of members in the Constituent Assembly for divided India?",
        answer: [
          {
            heading: "299 Members",
            paragraph: "As a consequence of the Partition, those members who were elected from territories that fell under Pakistan ceased to be members, and the number of members in the Assembly was reduced to 299."
          }
        ]
      },
      {
        question: "What was the ratio of seats allotted to population as per the Cabinet Mission Plan?",
        answer: [
          {
            heading: "1:10,00,000",
            paragraph: "According to the Cabinet Mission Plan, each Province and each Princely State were allotted seats proportional to their respective population, roughly in the ratio of 1:10,00,000."
          }
        ]
      },
      {
        question: "Mention one principle that was passed without debate in the Constituent Assembly.",
        answer: [
          {
            heading: "Universal Suffrage",
            paragraph: "The introduction of universal suffrage, which grants all adult citizens the right to vote irrespective of religion, caste, education, gender or income, was passed without virtually any debate."
          }
        ]
      },
      {
        question: "What does the term 'Rule of Law' mean?",
        answer: [
          {
            heading: "Principle of Rule of Law",
            paragraph: "The 'Rule of Law' is a principle that states the law is supreme and everyone, including the government, must obey it. This idea was borrowed from the British Constitution."
          }
        ]
      }
    ]
  },
  {
    category: '2-Markers Questions',
    questions: [
      {
        question: "What are the first two functions of a constitution?",
        answer: [
          {
            heading: "Coordination and Assurance",
            paragraph: "The first function is to provide a set of basic rules that allow for a minimal degree of coordination and assurance amongst members of a society, preventing insecurity and chaos."
          },
          {
            heading: "Specification of Decision-Making Powers",
            paragraph: "The second function is to specify who has the power to make decisions in a society and how the government will be constituted. It allocates power to different institutions to prevent confusion."
          }
        ]
      },
      {
        question: "What is meant by a 'balanced institutional design' of a constitution?",
        answer: [
          {
            heading: "Fragmentation of Power",
            paragraph: "Balanced institutional design means that power is fragmented across different institutions like the Legislature, Executive, and Judiciary. This intelligent design ensures that no single group can subvert the constitution."
          },
          {
            heading: "Flexibility and Rigidity",
            paragraph: "It also means striking the right balance between making certain values authoritative and allowing enough flexibility for the constitution to adapt to changing needs. Too rigid a constitution is likely to break."
          }
        ]
      },
      {
        question: "What were the two main sources of authority for the Indian Constitution?",
        answer: [
          {
            heading: "Credibility of the Constituent Assembly",
            paragraph: "The authority came from the fact that it was framed by the Constituent Assembly, which consisted of leaders who enjoyed immense public credibility and had the capacity to negotiate and command respect."
          },
          {
            heading: "Inheritance from the Nationalist Movement",
            paragraph: "The principles of the constitution were forged during the long struggle for freedom. The Constituent Assembly gave concrete shape to the values and aspirations inherited from the nationalist movement."
          }
        ]
      },
      {
        question: "Mention any two provisions borrowed from the British Constitution and the Canadian Constitution respectively.",
        answer: [
          {
            heading: "British Constitution Provisions",
            paragraph: "From the British Constitution, India borrowed the 'First Past the Post' electoral system and the Parliamentary Form of Government. These provisions define the electoral and governmental structure of India."
          },
          {
            heading: "Canadian Constitution Provisions",
            paragraph: "From the Canadian Constitution, India adopted a quasi-federal form of government, which is a federal system with a strong central government, and the idea of Residual Powers."
          }
        ]
      },
      {
        question: "State any two key principles mentioned in the Objectives Resolution.",
        answer: [
          {
            heading: "Independent, Sovereign, Republic",
            paragraph: "The Resolution declared that India would be an independent, sovereign, and democratic republic, establishing its status as a self-governing nation."
          },
          {
            heading: "Guaranteed Justice and Freedoms",
            paragraph: "It committed to guaranteeing social, economic, and political justice, as well as fundamental freedoms of speech, expression, belief, and worship for all people of India."
          }
        ]
      },
      {
        question: "What was the significance of public reason in the Constituent Assembly?",
        answer: [
          {
            heading: "Emphasis on Deliberation",
            paragraph: "The members of the Assembly placed a great emphasis on discussion and reasoned argument. The very act of giving reasons made members move away from narrow self-interest."
          },
          {
            heading: "Tribute to Democracy",
            paragraph: "The voluminous debates where each clause was scrutinized and debated is a testament to the democratic commitment of the Assembly and represents public reason at its best."
          }
        ]
      },
      {
        question: "Briefly explain the role of the Preamble and Directive Principles of State Policy (DPSP) in the Constitution.",
        answer: [
          {
            heading: "Preamble's Role",
            paragraph: "The Preamble serves as an introduction to the Constitution, outlining its philosophy, ideals, and objectives, such as justice, liberty, equality, and fraternity. It is the core of the document's aspirations."
          },
          {
            heading: "DPSP's Role",
            paragraph: "The DPSP are a set of guidelines for the government to follow in the governance of the country. They are meant to enable the government to fulfill the aspirations of a society and create a just social order."
          }
        ]
      },
    ]
  },
  {
    category: '3-Markers Questions',
    questions: [
      {
        question: "Explain the three main factors that make a constitution effective and respectable.",
        answer: [
          {
            heading: "Mode of Promulgation",
            paragraph: "A constitution's effectiveness depends on how it came into being. It must be crafted by credible leaders who enjoy popular backing, ensuring that people accept and respect its provisions voluntarily. The Indian Constitution, for instance, was framed after a popular national movement."
          },
          {
            heading: "Substantive Provisions",
            paragraph: "The constitution must contain provisions that are just and fair to all members of society, giving every group a reason to go along with its principles. It must preserve the freedom and equality of all citizens and avoid systematically oppressing minorities."
          },
          {
            heading: "Balanced Institutional Design",
            paragraph: "A well-crafted constitution fragments power across different institutions like the Legislature, Executive, and Judiciary. This system of checks and balances prevents any single group from subverting the constitution and allows it to adapt to changing circumstances."
          }
        ]
      },
      {
        question: "Describe the composition of the Constituent Assembly according to the Cabinet Mission Plan.",
        answer: [
          {
            heading: "Proportional Representation",
            paragraph: "Seats were allotted to each Province and Princely State proportional to their respective population, in the ratio of roughly 1:10,00,000. This ensured that the assembly was a representative body of the Indian people."
          },
          {
            heading: "Community Distribution",
            paragraph: "The seats in each Province were distributed among the three main communities—Muslims, Sikhs, and General—in proportion to their respective populations, ensuring representation for different religious groups."
          },
          {
            heading: "Method of Election",
            paragraph: "Members of each community in the Provincial Legislative Assembly elected their own representatives by the method of proportional representation with a single transferable vote. The method for Princely States was decided by consultation."
          }
        ]
      },
      {
        question: "Explain how the Indian Constitution is a product of the nationalist movement.",
        answer: [
          {
            heading: "Consensus on Main Principles",
            paragraph: "The Constituent Assembly did not start from scratch. There was a pre-existing consensus on the main principles the Constitution should enshrine, which had been forged during the long struggle for freedom."
          },
          {
            heading: "Debates on Relevant Questions",
            paragraph: "For decades, the nationalist movement had debated crucial questions relevant to constitution-making, such as the form of government, the values to be upheld, and the inequalities to be overcome. The answers to these debates were given their final form in the Constitution."
          },
          {
            heading: "The Objectives Resolution",
            paragraph: "The Objectives Resolution, moved by Nehru in 1946, is the best summary of the principles of the nationalist movement. It encapsulated the aspirations and values like justice, equality, and liberty, providing a moral commitment for the Constitution."
          }
        ]
      },
      {
        question: "Why is it necessary for a country to have a clear demarcation of powers in its constitution? What happens without it?",
        answer: [
          {
            heading: "Prevents Conflict and Defines Authority",
            paragraph: "A clear demarcation of powers and responsibilities specifies which institution has the authority to make laws and who is responsible for their implementation. This prevents conflicts between different branches of government."
          },
          {
            heading: "Establishes a System of Checks and Balances",
            paragraph: "By demarcating power, a constitution creates a system where each branch of government can check the other's actions. This ensures that no single institution becomes too powerful and subverts the constitution."
          },
          {
            heading: "Prevents Chaos and Insecurity",
            paragraph: "In the absence of a clear demarcation, there would be a constant power struggle between different government bodies. This would lead to chaos, unpredictability, and a sense of insecurity among citizens, as they would not know which laws to follow."
          }
        ]
      },
      {
        question: "What were the three factors that contributed to the Indian Constitution drawing enormous legitimacy and public authority?",
        answer: [
          {
            heading: "Credible Leadership",
            paragraph: "The Constitution was drawn up by leaders like Nehru, Patel, and Ambedkar who had immense public credibility from their role in the national movement. They had the capacity to negotiate and command the respect of a wide cross-section of society."
          },
          {
            heading: "Broad National Consensus",
            paragraph: "The final document reflected a broad national consensus at the time. Although it wasn't subjected to a referendum, the people adopted it as their own by abiding by its provisions, giving it enormous public authority."
          },
          {
            heading: "Commitment to a New Citizenship",
            paragraph: "Framed against the backdrop of Partition, the Constitution was committed to a new conception of citizenship where minorities would be secure and religious identity would have no bearing on citizenship rights, thus gaining trust across all communities."
          }
        ]
      }
    ]
  },
  {
    category: '4-Markers Questions',
    questions: [
      {
        question: "Describe the main functions of a constitution in detail.",
        answer: [
          {
            heading: "Coordination and Assurance",
            paragraph: "The first function is to provide a set of basic rules that are publicly known and enforceable. This enables minimal coordination among diverse members of a society, preventing insecurity and conflict. The rules provide an assurance that others will follow them, as violations are punishable."
          },
          {
            heading: "Specification of Decision-Making Powers",
            paragraph: "A constitution specifies the fundamental allocation of power in a society. It determines who has the authority to make laws and how the government itself will be constituted. For instance, it defines the electoral process and the roles of institutions like the Parliament or the President."
          },
          {
            heading: "Limitations on Government Powers",
            paragraph: "It sets certain fundamental limits on what a government can impose on its citizens. These limits are protected by enshrining fundamental rights, such as freedom of speech or freedom of religion, which the government cannot violate. This acts as a safeguard against tyranny."
          },
          {
            heading: "Aspirations and Goals of a Society",
            paragraph: "The constitution provides an enabling framework for the government to work towards the welfare of its people. It expresses the aspirations and goals of society, like overcoming inequalities or ensuring social justice, and empowers the government to take positive measures to achieve them."
          }
        ]
      },
      {
        question: "What principles of justice were encapsulated in the Objectives Resolution? Explain any four.",
        answer: [
          {
            heading: "Social, Economic, and Political Justice",
            paragraph: "The resolution promised to secure justice for all citizens in social, economic, and political spheres. This meant a commitment to eliminating social discrimination, ensuring fair distribution of wealth, and guaranteeing equal political rights, such as the right to vote."
          },
          {
            heading: "Equality of Status and Opportunities",
            paragraph: "It guaranteed equality for all people, not only before the law but also in terms of social status and opportunities. This was a direct response to the deep-seated inequalities that existed in Indian society."
          },
          {
            heading: "Fundamental Freedoms",
            paragraph: "The Resolution guaranteed fundamental freedoms of speech, expression, belief, faith, worship, vocation, association, and action. This was a crucial promise of liberty, ensuring that citizens would not be arbitrarily suppressed by the state."
          },
          {
            heading: "Safeguards for Minorities and Backward Classes",
            paragraph: "It explicitly committed to providing adequate safeguards for minorities, backward and tribal areas, and other depressed classes. This was a solemn promise to protect the rights and interests of vulnerable groups and ensure their inclusion in national life."
          }
        ]
      },
      {
        question: "Explain the role of the Constituent Assembly in the making of the Indian Constitution, highlighting the principle of deliberation.",
        answer: [
          {
            heading: "Framing the Constitution",
            paragraph: "The Constituent Assembly was the body responsible for formally drafting the Indian Constitution. It consisted of members elected from provincial assemblies, ensuring it was a broadly representative body of undivided India, and later, partitioned India."
          },
          {
            heading: "Commitment to Public Reason",
            paragraph: "The Assembly's authority was rooted in its commitment to 'public reason.' Members did not just protect their own interests but engaged in extensive discussion and reasoned arguments. This process of giving reasons to others helped in arriving at a consensus that served the interests of the whole nation."
          },
          {
            heading: "Detailed Deliberation and Debates",
            paragraph: "Each clause of the Constitution was subjected to detailed scrutiny and debate over 166 days across nearly three years. The Assembly had eight major committees on different subjects, and their drafted provisions were debated by the entire Assembly, with every argument being carefully considered and responded to in writing."
          },
          {
            heading: "Democratic Commitment",
            paragraph: "The Assembly's democratic commitment was evident in its easy and unanimous decision to introduce universal adult suffrage. This meant every adult citizen would have the right to vote, a principle that was adopted with virtually no debate, reflecting the consensus on this foundational democratic value."
          }
        ]
      },
      {
        question: "Discuss the three key elements of a balanced institutional design that facilitated the success of the Indian Constitution.",
        answer: [
          {
            heading: "Fragmentation of Power",
            paragraph: "The constitution intelligently fragments power across different institutions, such as the Legislature, the Executive, and the Judiciary. This horizontal fragmentation ensures that no single institution can acquire a monopoly of power or subvert the constitution on its own."
          },
          {
            heading: "System of Checks and Balances",
            paragraph: "An intelligent system of checks and balances was incorporated, allowing each institution to monitor and control the transgressions of the others. For example, the judiciary can review laws passed by the legislature, and the legislature can hold the executive accountable. This prevents the abuse of power."
          },
          {
            heading: "Balance between Flexibility and Rigidity",
            paragraph: "The constitution strikes a right balance between being too rigid and too flexible. It preserves its core values and authoritative norms while also allowing for changes and adaptations to new circumstances. This is what makes it a 'living document' capable of surviving the weight of change."
          },
          {
            heading: "Federal Arrangement",
            paragraph: "The constitution also distributed governmental powers vertically between the central government and the state governments. This federal arrangement further fragments power, giving autonomy to the states while maintaining a strong center, which is crucial for a country as diverse as India."
          }
        ]
      },
    ]
  },
  {
    category: '5-Markers Questions',
    questions: [
      {
        question: "Critically examine the statement: 'The Constitution has not failed us. We have failed the Constitution.' Do you agree with this position? Justify your answer with arguments from the chapter.",
        answer: [
          {
            heading: "Arguments in Agreement",
            paragraph: "This position argues that the Constitution itself is a robust and well-crafted framework for a democratic government. The chapter states that the Constitution has succeeded in giving India a framework of democratic government and that it strikes a balance between preserving core values and adapting to change. The failure lies not in the document but in the failure of the people and institutions to live up to its ideals."
          },
          {
            heading: "Aspirations and Promises",
            paragraph: "The Constitution made solemn promises of ensuring liberty, equality, and fraternity, and also provided an enabling framework to achieve these. However, if these ideals have not been fully realized, it indicates a failure in their implementation by the government and society, not a flaw in the constitutional promises themselves. The DPSP, for instance, are a guide for welfare measures that need to be actively pursued."
          },
          {
            heading: "Role of Citizens",
            paragraph: "The chapter emphasizes that the Constitution's success depends on the voluntary allegiance of the people and the actions of those in power. If citizens do not hold leaders accountable, or if leaders do not uphold constitutional values, then the constitution's goals cannot be met. The responsibility for its effective working lies with the 'we,' not just the document itself."
          },
          {
            heading: "Balanced Institutional Design",
            paragraph: "The constitution's intelligent design, with its fragmentation of power and system of checks and balances, is a powerful tool to prevent subversion. If this system fails, it is often due to the deliberate actions or inactions of the institutions and people who operate within it, who may choose to bypass or manipulate these checks for personal gain."
          },
          {
            heading: "Conclusion",
            paragraph: "Based on the chapter's content, which highlights the wisdom and foresight of the framers and the robustness of the constitutional framework, the position that 'We have failed the Constitution' holds more weight. The document provides a strong foundation, but its success relies on the collective will and commitment of the nation to uphold its principles in practice."
          }
        ]
      },
      {
        question: "Harbans argues that the Indian Constitution has succeeded in giving us a framework of democratic government. Justify this statement with five key arguments from the chapter.",
        answer: [
          {
            heading: "Establishment of Democratic Institutions",
            paragraph: "The Constitution successfully established the basic structure of a democratic government, including institutions like the Legislature (Parliament), Executive, and Judiciary. It specifies how these institutions are to be constituted and how they should function, providing a clear framework for democratic governance."
          },
          {
            heading: "Universal Adult Suffrage",
            paragraph: "A major achievement and a testament to its democratic commitment was the introduction of universal adult suffrage, which was adopted with virtually no debate. This foundational principle ensured that all adult citizens, regardless of background, have the right to vote, making the government accountable to the entire population."
          },
          {
            heading: "Balanced Institutional Design",
            paragraph: "The constitution's intelligent design, with its horizontal and vertical fragmentation of power and a robust system of checks and balances, ensures that no single institution can acquire a monopoly on power. This prevents the rise of authoritarianism and guarantees a functioning, multi-faceted democratic system."
          },
          {
            heading: "Enabling Democratic Goals",
            paragraph: "The constitution provides an enabling framework for the government to pursue democratic goals like social justice and equality, as articulated in the Directive Principles of State Policy. This goes beyond mere political democracy and seeks to create a social democracy where every citizen can lead a life of dignity."
          },
          {
            heading: "Inclusivity and Public Reason",
            paragraph: "The Constituent Assembly itself was a model of democratic functioning. It was a broadly representative body that engaged in extensive deliberation based on 'public reason,' not on narrow self-interest. This process, as the chapter highlights, set a precedent for a transparent and democratic approach to governance."
          }
        ]
      },
      {
        question: "Based on the cartoon of the 'Castle of Cards' (Iraq Constitution), analyze why the Indian Constitution is not considered a similar 'Castle of Cards' and what makes it a robust document.",
        answer: [
          {
            heading: "Contrast in Promulgation",
            paragraph: "The Iraqi constitution, as depicted, seems to be a fragile structure built on conflicting interests of different ethnic groups (Shiites, Sunnis, Kurds) that were in conflict with each other. In contrast, the Indian Constitution was a result of a broad national consensus forged during a long-standing nationalist movement. It drew authority from credible leaders who had the trust of a wide cross-section of society."
          },
          {
            heading: "Substantive Provisions for Unity",
            paragraph: "The Indian Constitution's substantive provisions were designed to unite a diverse nation. It explicitly rejects ethnic identity as a criterion for citizenship and provides safeguards for minorities, ensuring no single group is permanently oppressed. This stands in stark contrast to the Iraqi cartoon, where different factions seem to be pulling the document apart for their own interests."
          },
          {
            heading: "Balanced Institutional Design",
            paragraph: "Unlike a 'castle of cards' which can easily collapse, the Indian Constitution's intelligent design fragments power across the Legislature, Executive, and Judiciary. This system of checks and balances provides a strong foundation that prevents its subversion by any single group. The document is not precarious; it is robust and resilient."
          },
          {
            heading: "Principle of Deliberation",
            paragraph: "The making of the Indian Constitution was a process of extensive deliberation and public reason, where every clause was debated with the interests of the whole nation in mind. This painstaking process built a strong foundation of shared values, unlike the image of a fragmented and conflict-ridden process shown for the Iraqi constitution."
          },
          {
            heading: "Flexibility and Adaptability",
            paragraph: "The Indian Constitution is described as a 'living document' because it can adapt to changing needs. This inherent flexibility makes it more stable and less likely to break under pressure, unlike a rigid 'castle of cards' that would shatter with any change. It strikes a balance between its core principles and the need for amendments."
          }
        ]
      },
      {
        question: "Do you agree with Rajat's perspective that the constitution is an outdated, difficult, and non-consensual book? Based on the chapter, how would you respond to each of his three points?",
        answer: [
          {
            heading: "Response to 'Outdated' Argument",
            paragraph: "Rajat's claim that the constitution is outdated is incorrect. The chapter explains that the Indian Constitution is a 'living document.' This means it is designed to be flexible enough to adapt to new circumstances through a process of amendments, while still preserving its core values. It is not static but evolves with the needs of the country, thus it remains relevant."
          },
          {
            heading: "Response to 'Non-Consensual' Argument",
            paragraph: "Rajat's feeling that no one took his consent is valid on a personal level, but it ignores the historical context. The chapter clarifies that the constitution was framed by the Constituent Assembly, which was a broadly representative body of credible leaders who had the backing of a massive national movement. The people of India gave their implicit consent by abiding by its provisions over the last seventy years, making it their own."
          },
          {
            heading: "Response to 'Difficult Language' Argument",
            paragraph: "While the language of any legal document can be complex, the principles and values behind the Constitution are meant to be widely understood. The chapter highlights that the constitution is not just a maze of rules but a 'moral commitment' to a government that fulfills the promises of justice, liberty, and equality. The core ideals are simple and foundational to the lives of all citizens, even if the legal wording is technical."
          },
          {
            heading: "Conclusion on Obedience",
            paragraph: "Based on these points, you should obey the constitution not because it's a command, but because it's a document that protects you, gives you rights, and provides a stable framework for a just society. It is the result of a collective effort to build a nation on the principles of justice and fairness, which is why it commands voluntary allegiance."
          },
          {
            heading: "The Constitution as a Source of Identity",
            paragraph: "Finally, the constitution provides a fundamental political and moral identity. By agreeing to its norms, you are part of a larger collective entity, a nation founded on shared values. It sets authoritative constraints and defines what we may or may not do, thereby providing a framework within which individual aspirations and freedoms can be pursued."
          }
        ]
      }
    ]
  },
  {
    category: '6-Markers Questions',
    questions: [
      {
        question: "Discuss the fundamental principles of the Indian Constitution, highlighting the influence of the nationalist movement and key provisions adapted from other constitutions. Use six distinct points.",
        answer: [
          {
            heading: "Influence of the Nationalist Movement",
            paragraph: "The core principles of the Indian Constitution were not created in a vacuum but were forged during the long struggle for freedom. The debates and ideals of the nationalist movement provided a strong background consensus on values like liberty, equality, and justice."
          },
          {
            heading: "The Objectives Resolution as a Blueprint",
            paragraph: "The Objectives Resolution, moved by Nehru, served as a foundational blueprint. It encapsulated the aspirations of the nationalist movement, declaring India a sovereign republic and committing to principles of justice, equality, and fundamental freedoms for all citizens, including safeguards for minorities."
          },
          {
            heading: "Adoption of Parliamentary Government",
            paragraph: "India adopted the Parliamentary Form of Government from the British Constitution. This institutional arrangement, where the executive is responsible to the legislature, was chosen to ensure a government that is accountable and representative of the people."
          },
          {
            heading: "Incorporation of Fundamental Rights",
            paragraph: "Inspired by the United States Constitution, the framers included a charter of Fundamental Rights. This was a crucial step to limit the power of the government and protect the basic liberties of citizens, ensuring they are not arbitrarily violated."
          },
          {
            heading: "Directive Principles of State Policy (DPSP)",
            paragraph: "Adapted from the Irish Constitution, the DPSP are a set of enabling provisions that guide the state in creating a just society. They go beyond basic rights and outline the government's responsibility to pursue positive welfare measures, thereby combining political democracy with social and economic justice."
          },
          {
            heading: "A Quasi-Federal Structure",
            paragraph: "The Canadian Constitution influenced India's adoption of a quasi-federal system. This structure provides a federal system with a strong central government, which was deemed necessary to maintain national unity and integrity in a diverse country while also allowing for the distribution of powers to states."
          }
        ]
      },
      {
        question: "Based on the cartoons presented in the chapter, compare and contrast the process of constitution-making in India with that of the European Union and Iraq. What does this suggest about the success of the Indian model?",
        answer: [
          {
            heading: "Indian Constitution-Making: Consensus and Deliberation",
            paragraph: "The Indian model was characterized by extensive public deliberation and a strong national consensus. The Constituent Assembly, led by credible leaders, debated every clause with the interests of the entire nation in mind. This process, rooted in 'public reason,' led to a robust document that was widely accepted."
          },
          {
            heading: "EU Constitution-Making: Lack of Agreement",
            paragraph: "The cartoon on the European Constitution, titled 'The Feuding Fathers,' suggests a process plagued by conflict and a failure to reach agreement. This implies that without a strong, unified vision or a foundational consensus, even a constitution-making process can fall apart, highlighting the challenge of uniting diverse and independent states."
          },
          {
            heading: "Iraqi Constitution-Making: Ethnic Conflict",
            paragraph: "The cartoon of the Iraqi Constitution as a 'castle of cards' illustrates a process dominated by ethnic and sectarian conflict. It shows different groups (Shiites, Sunnis, Kurds) vying for control, suggesting a fragile and unstable foundation. This process is contrasted with India's, where constitutional safeguards were designed to overcome such divisions, not give in to them."
          },
          {
            heading: "Role of Leadership",
            paragraph: "In India, leaders like Nehru and Ambedkar acted as balancers, trying to accommodate different visions within a unified framework. This contrasts with the 'feuding fathers' of the EU and the fragmented, self-interested factions in Iraq, where leadership could not effectively steer the process towards a stable and unifying outcome."
          },
          {
            heading: "Source of Authority",
            paragraph: "The Indian Constitution's authority came from the legitimacy of its framers and the backing of a popular movement, making it a document of the people. In contrast, the Iraqi constitution's authority seems to be based on a shaky power-sharing arrangement among conflicting groups, making it inherently weak. The EU's failure highlights a lack of a single unifying authority or popular mandate."
          },
          {
            heading: "Conclusion on Success",
            paragraph: "The comparison suggests that the success of the Indian model lies in its unique combination of strong, credible leadership, a pre-existing national consensus, and a process of genuine public deliberation. This allowed India to create a durable, unifying document, while the processes in the EU and Iraq, lacking these elements, were either unsuccessful or resulted in fragile constitutional frameworks."
          }
        ]
      }
    ]
  }
];


// Data for Chapter 2
const chapter2TopicsData = [
  {
    id: 'importance-of-rights',
    title: 'Importance of Rights & Bill of Rights',
    emoji: '⚖️',
    child: {
      details: [
        {
          heading: "Why are rights important?",
          paragraph: "Rights are important because they protect people from being treated unfairly. Without them, a person's life and freedom could be taken away by others or even by the government, as seen in the cases of the construction workers and Machal Lalung."
        },
        {
          heading: "What is a Bill of Rights?",
          paragraph: "A Bill of Rights is a list of important rights for citizens that are written down and protected by the country's constitution. This list makes sure the government always respects these rights and provides a way to fix things if they are violated."
        }
      ],
      summary_paragraph: "Rights are essential for a fair society. A Bill of Rights lists and protects these important rights in the constitution itself, ensuring that the government respects them and providing a way to seek justice if they are violated."
    },
    exam: {
      details: [
        {
          heading: "Importance of Rights",
          paragraph: "Rights are crucial for a functioning democracy as they ensure that individuals are protected from potential threats by other persons, private organizations, or even the state. They guarantee the 'right to life and liberty' and the right to a fair and speedy trial, preventing injustices like those experienced by Machal Lalung."
        },
        {
          heading: "Definition of a Bill of Rights",
          paragraph: "A Bill of Rights is a list of rights of citizens that are explicitly mentioned and protected by the constitution of a country. Its purpose is to prohibit the government from acting against the rights of individuals and to provide a remedy in case these rights are violated, serving as a 'cornerstone of democracy'."
        }
      ],
      summary_paragraph: "Rights are fundamental to a democracy, protecting individuals from various forms of exploitation and injustice. A Bill of Rights, which is a list of constitutional rights, is a common practice in democratic countries to ensure that the government recognizes and protects these rights, providing legal remedies for their violation."
    }
  },
  {
    id: 'fundamental-rights',
    title: 'Fundamental Rights in the Indian Constitution',
    emoji: '🇮🇳',
    child: {
      details: [
        {
          heading: "What makes them 'Fundamental'?",
          paragraph: "They are called 'fundamental' because they are so important that they are specially listed in the Constitution and cannot be easily changed. They are protected by the Constitution itself, unlike ordinary rights which can be changed by a simple law."
        },
        {
          heading: "Who protects them?",
          paragraph: "The courts, especially the Supreme Court and High Courts, have the power and duty to protect these rights. If a government action violates a fundamental right, the court can declare it illegal."
        }
      ],
      summary_paragraph: "Fundamental Rights are a special category of rights listed and protected by the Constitution itself. They are more important than ordinary rights and cannot be easily violated by the government, with the judiciary acting as their protector."
    },
    exam: {
      details: [
        {
          heading: "Meaning of 'Fundamental'",
          paragraph: "The term 'fundamental' signifies that these rights are considered so crucial that the Constitution has listed them separately with special provisions for their protection. They are considered an essential component of the Constitution and cannot be violated by any organ of the government."
        },
        {
          heading: "Distinction from Ordinary Rights",
          paragraph: "Unlike ordinary legal rights which can be changed by the legislature through a normal law-making process, a fundamental right can only be changed by an amendment to the Constitution. Furthermore, the judiciary holds the power and responsibility to protect fundamental rights from violation by any executive or legislative action, which is a power it does not hold over ordinary rights."
        }
      ],
      summary_paragraph: "Fundamental Rights are a distinct and superior category of rights in the Indian Constitution. They are guaranteed and protected by the Constitution itself, unlike ordinary rights which are protected by ordinary law. They are not absolute, however, and the government can impose 'reasonable restrictions' on them. The judiciary serves as the ultimate guardian of these rights, empowered to declare any government action illegal if it violates them."
    }
  },
  {
    id: 'right-to-equality',
    title: 'Right to Equality',
    emoji: '🤝',
    child: {
      details: [
        {
          heading: "What does it mean?",
          paragraph: "It means that every person is treated equally by the law and there should be no unfair treatment based on their religion, caste, gender, or where they were born. It also means everyone has equal opportunities for jobs in the government."
        },
        {
          heading: "What did it change?",
          paragraph: "This right made practices like 'untouchability' illegal and stopped the government from giving special titles to people. This helps all citizens feel a sense of dignity and equal status."
        },
        {
          heading: "What about reservations?",
          paragraph: "The Constitution allows for special schemes and measures, like reservations, for children, women, and backward classes. This is not seen as a violation of equality but as a way to give equal opportunity to those who were not treated fairly in the past."
        }
      ],
      summary_paragraph: "The Right to Equality ensures that all people are treated equally by the law and have equal opportunities. It makes old unfair practices like untouchability illegal and allows for special support to help those who were disadvantaged, ensuring everyone has dignity and equal status."
    },
    exam: {
      details: [
        {
          heading: "Equality Before Law and Equal Protection",
          paragraph: "This right guarantees that all citizens are equal before the law, meaning everyone is subject to the same laws and no person is above the law. It also ensures the equal protection of laws, which implies that equals should be treated equally."
        },
        {
          heading: "Prohibition of Discrimination",
          paragraph: "Article 15 of the Constitution explicitly prohibits the state from discriminating against any citizen on grounds only of religion, race, caste, sex, or place of birth. This extends to equal access to public places like shops, hotels, wells, and places of worship."
        },
        {
          heading: "Abolition of Social Evils",
          paragraph: "The right to equality abolished the practice of 'untouchability,' one of the crudest manifestations of inequality in Indian society. It also abolished titles, except for military and academic distinctions, to ensure a sense of equality of status."
        },
        {
          heading: "Equality of Opportunity and Reservations",
          paragraph: "While ensuring equality of opportunity in public employment, the Constitution clarifies that special provisions or reservations for backward classes, women, or children are not a violation of this right. Instead, they are considered necessary to fulfill the spirit of equal opportunity in a society with deep-seated inequalities."
        }
      ],
      summary_paragraph: "The Right to Equality (Articles 14-18) is a foundational principle of the Indian Constitution, aiming to establish a society free from discrimination. It ensures equality before the law, prohibits discrimination based on caste, religion, sex, etc., and provides for equal access to public spaces and public employment. Crucially, it abolishes untouchability and titles, fostering a sense of equal dignity among all citizens. It also justifies policies like reservations as a necessary measure to achieve substantive equality of opportunity for historically disadvantaged sections of society."
    }
  },
  {
    id: 'right-to-freedom',
    title: 'Right to Freedom',
    emoji: '🗣️',
    child: {
      details: [
        {
          heading: "What does it include?",
          paragraph: "This right gives us many freedoms, like the freedom to speak and express our thoughts, to gather peacefully without weapons, to form groups, to travel anywhere in India, to live anywhere, and to do any job we want."
        },
        {
          heading: "Are there any limits?",
          paragraph: "Yes, these freedoms are not absolute. The government can put 'reasonable restrictions' on them to keep public order, peace, and safety. For example, you can't shout fire in a crowded place just because you have freedom of speech."
        },
        {
          heading: "Right to Life and Personal Liberty",
          paragraph: "This is a very important part of this right. It means no one's life or freedom can be taken away unless a legal procedure is followed. If you are arrested, the police must tell you why, and you have the right to a lawyer and to be presented before a judge within 24 hours."
        }
      ],
      summary_paragraph: "The Right to Freedom gives citizens many important freedoms like speech, assembly, and movement. These rights are not unlimited and can have reasonable restrictions to maintain public safety. A key part is the Right to Life and Personal Liberty, which protects an individual's life and ensures they are not arrested unfairly without a proper legal process."
    },
    exam: {
      details: [
        {
          heading: "Six Fundamental Freedoms",
          paragraph: "Article 19 guarantees six freedoms to all citizens: freedom of speech and expression; freedom to assemble peacefully and without arms; freedom to form associations or unions; freedom to move freely throughout India; freedom to reside and settle in any part of India; and freedom to practice any profession or carry on any occupation, trade, or business."
        },
        {
          heading: "Right to Life and Personal Liberty (Article 21)",
          paragraph: "This is a cornerstone of the Right to Freedom. It states that 'No person shall be deprived of his life or personal liberty except according to procedure established by law.' The Supreme Court has expanded its scope to include the right to live with human dignity, right to shelter, and right to livelihood."
        },
        {
          heading: "Preventive Detention",
          paragraph: "An exception to personal liberty is preventive detention, where a person can be arrested based on the apprehension that they might engage in unlawful activity. This detention can last for a maximum of three months without a review by an advisory board. This provision, however, has been a source of tension and is often criticized for potential misuse."
        },
        {
          heading: "Rights of the Accused",
          paragraph: "The Constitution provides three important rights for a fair trial: no person can be punished for the same offense more than once (double jeopardy), no law can be made with retrospective effect to make an action illegal, and no person can be asked to give evidence against themselves."
        },
        {
          heading: "Reasonable Restrictions",
          paragraph: "All freedoms under Article 19 are subject to 'reasonable restrictions' imposed by the state to protect public order, morality, and national security. This means that these rights are not absolute and must be balanced with the interests of the larger society."
        }
      ],
      summary_paragraph: "The Right to Freedom is a collection of essential rights for a democratic society. It includes six freedoms under Article 19, which are crucial for individual expression and participation. The right to life and personal liberty (Article 21) is its most important aspect, guaranteeing the protection of an individual's life and ensuring a fair legal process, including protection against arbitrary arrest. While these rights are not absolute and can have reasonable restrictions, the Constitution also provides safeguards for the rights of the accused to ensure a fair trial."
    }
  },
  {
    id: 'right-against-exploitation',
    title: 'Right Against Exploitation',
    emoji: '🚫',
    child: {
      details: [
        {
          heading: "What does it stop?",
          paragraph: "This right stops people from being forced to work without pay (forced labour or 'begar'), being bought or sold as slaves, and using children under the age of 14 for dangerous jobs like in factories or mines."
        },
        {
          heading: "Why is it important?",
          paragraph: "It is important because it protects poor and vulnerable people from being exploited by richer and more powerful individuals. It ensures that everyone is treated with human dignity and is not forced to work in terrible conditions."
        }
      ],
      summary_paragraph: "The Right against Exploitation is a powerful tool in the Constitution that prohibits forced labor, human trafficking, and the employment of children in dangerous jobs, thereby protecting the most vulnerable sections of society."
    },
    exam: {
      details: [
        {
          heading: "Prohibition of Forced Labour and Human Trafficking",
          paragraph: "This right prohibits 'begar' (forced labor without payment) and all similar forms of forced labor. It also outlaws the practice of buying and selling human beings for immoral purposes or as slaves, ensuring human dignity and freedom."
        },
        {
          heading: "Prohibition of Child Labour",
          paragraph: "The Constitution forbids the employment of children below the age of 14 in hazardous occupations, including factories and mines. This provision, along with the Right to Education, aims to protect children and ensure they have an opportunity to pursue education."
        }
      ],
      summary_paragraph: "The Right against Exploitation (Articles 23-24) is designed to protect the underprivileged and deprived sections of society from various forms of exploitation. It strictly prohibits human trafficking, 'begar' (forced labour), and other similar forms of forced work. Additionally, it makes the employment of children below the age of 14 in hazardous jobs illegal and punishable, serving as a critical safeguard for the rights and well-being of children."
    }
  },
  {
    id: 'right-to-freedom-of-religion',
    title: 'Right to Freedom of Religion',
    emoji: '🕌',
    child: {
      details: [
        {
          heading: "What does it mean?",
          paragraph: "Everyone has the freedom to choose any religion they want, or to not choose any religion at all. They can practice their religion, manage their religious affairs, and spread information about it."
        },
        {
          heading: "Are there any limits?",
          paragraph: "Yes, this freedom is not unlimited. The government can put restrictions on religious practices to protect public order, morality, and health. The government can also interfere to ban social evils like sati or bigamy, even if they are part of a religious practice."
        },
        {
          heading: "Equality for all religions",
          paragraph: "The Constitution ensures that the government will not favor or discriminate against any particular religion. It means India does not have an official religion, and state-run institutions will not preach any one religion, which is the basis of secularism."
        }
      ],
      summary_paragraph: "The Right to Freedom of Religion allows every person to choose and practice their religion freely. This right is not absolute and can be restricted to maintain public order and morality. Importantly, the Constitution ensures that the government treats all religions equally, establishing India as a secular state."
    },
    exam: {
      details: [
        {
          heading: "Freedom of Conscience and Worship",
          paragraph: "This right guarantees freedom of conscience and the right to freely profess, practice, and propagate any religion. It also implies the freedom to not follow any religion. This freedom is, however, subject to reasonable restrictions on grounds of public order, morality, and health."
        },
        {
          heading: "Freedom to Manage Religious Affairs",
          paragraph: "The right also gives religious groups the freedom to manage their own religious affairs, establish and maintain institutions for religious and charitable purposes, and own and acquire movable and immovable property."
        },
        {
          heading: "Secularism and Equality of Religions",
          paragraph: "The Constitution ensures that the state will not favor or discriminate against any particular religion. India has no official state religion. State-run educational institutions are prohibited from providing religious instruction, and there is no discrimination in public employment based on religion. These provisions collectively uphold the principle of secularism."
        },
        {
          heading: "Prohibition of Forcible Conversions",
          paragraph: "While the right allows for the propagation of religion, which includes persuading people to convert, it strictly prohibits forcible conversions based on intimidation or inducement. The right to propagate is about spreading information, not compelling belief."
        }
      ],
      summary_paragraph: "The Right to Freedom of Religion (Articles 25-28) is a fundamental aspect of India's secular democracy. It grants every citizen the freedom of conscience and the right to profess, practice, and propagate any religion. While this freedom is subject to reasonable state restrictions to ensure public order, morality, and health, it is a cornerstone of India's constitutional values. The principle of secularism is further reinforced by ensuring equal treatment of all religions by the state, with no official state religion, and prohibiting religious instruction in state-funded educational institutions."
    }
  },
  {
    id: 'cultural-educational-rights',
    title: 'Cultural and Educational Rights',
    emoji: '📚',
    child: {
      details: [
        {
          heading: "Why are they needed?",
          paragraph: "India has many different groups of people with their own languages and cultures. This right is important because it ensures that smaller groups (minorities) can keep their own unique culture and language, and don't have to adopt the culture of the majority."
        },
        {
          heading: "What does it allow?",
          paragraph: "It allows any minority group, whether based on religion or language, to start their own educational institutions. This helps them preserve and develop their own culture, language, and script. The government also cannot be biased against these institutions when giving them aid."
        }
      ],
      summary_paragraph: "The Cultural and Educational Rights are meant to protect India's diversity. They give religious and linguistic minorities the right to preserve their culture, language, and script by establishing and managing their own educational institutions, which the government must support equally."
    },
    exam: {
      details: [
        {
          heading: "Protection of Minority Culture and Language",
          paragraph: "The Constitution recognizes that India's diversity is its strength and therefore grants minorities the right to maintain their distinct language, script, and culture. A minority is a group that is outnumbered by others in a particular region or the country as a whole, based on common language or religion."
        },
        {
          heading: "Right to Establish Educational Institutions",
          paragraph: "All minorities, both religious and linguistic, have the right to establish and administer educational institutions of their choice. This right is crucial for them to preserve and develop their unique cultural identity. The government is also prohibited from discriminating against these institutions when providing grants-in-aid."
        }
      ],
      summary_paragraph: "The Cultural and Educational Rights (Articles 29-30) are designed to protect the interests of India's diverse minority groups. These rights ensure that any section of citizens with a distinct language, script, or culture has the right to conserve it. Furthermore, all religious and linguistic minorities are granted the right to establish and administer educational institutions of their choice, a provision that is essential for the preservation and development of their cultural heritage. The state is bound to provide non-discriminatory aid to these institutions."
    }
  },
  {
    id: 'right-to-constitutional-remedies',
    title: 'Right to Constitutional Remedies',
    emoji: '📜',
    child: {
      details: [
        {
          heading: "What is it for?",
          paragraph: "This is a very important right because it makes all the other fundamental rights real. It gives every citizen the right to go to the High Court or Supreme Court to get their rights protected if they are ever violated. Dr. B.R. Ambedkar called it the 'heart and soul of the constitution'."
        },
        {
          heading: "What can the courts do?",
          paragraph: "The courts can issue special orders called 'writs'. These writs are like powerful commands to the government to either do something or stop doing something, in order to protect a person's rights. For example, a 'Habeas Corpus' writ commands the court to order an arrested person to be presented before it."
        },
      ],
      summary_paragraph: "The Right to Constitutional Remedies is the 'heart and soul' of the Constitution because it provides a practical way for citizens to get their fundamental rights protected. It allows a person to directly approach the higher courts, which can issue special orders (writs) to enforce these rights against any government violation."
    },
    exam: {
      details: [
        {
          heading: "'Heart and Soul of the Constitution'",
          paragraph: "Dr. B.R. Ambedkar considered this right as the 'heart and soul of the constitution' because it provides the mechanism for the enforcement of all other fundamental rights. Without this right, the list of rights would be merely a collection of words without any practical enforceability."
        },
        {
          heading: "Power of the Courts to Issue Writs",
          paragraph: "This right empowers the Supreme Court and High Courts to issue various special orders or 'writs' for the enforcement of fundamental rights. The five types of writs are: Habeas Corpus (to produce a detained person), Mandamus (to compel a public official to perform their duty), Prohibition (to stop a lower court from exceeding its jurisdiction), Quo Warranto (to question the authority of a person holding a public office), and Certiorari (to transfer a case from a lower court to a higher one)."
        },
      ],
      summary_paragraph: "The Right to Constitutional Remedies (Article 32) is a critical safeguard for the Fundamental Rights. It grants every citizen the right to approach the Supreme Court or a High Court for the enforcement of their rights in case of a violation. The courts, in turn, can issue five types of special orders, or 'writs', to the government or other authorities to protect these rights. Dr. B.R. Ambedkar famously called it the 'heart and soul' of the Constitution because it makes the other rights meaningful and enforceable."
    }
  },
  {
    id: 'fundamental-rights-vs-dpsp',
    title: 'Fundamental Rights vs. Directive Principles',
    emoji: '⚖️',
    child: {
      details: [
        {
          heading: "What is the difference?",
          paragraph: "Fundamental Rights are things the government *must not do* to you, like taking away your freedom. Directive Principles are things the government *should try to do* for society, like providing better jobs or education. You can go to court if your fundamental rights are violated, but you cannot for Directive Principles."
        },
        {
          heading: "Do they ever clash?",
          paragraph: "Yes, sometimes a government law meant to achieve a Directive Principle might seem to violate a Fundamental Right. For example, a law to distribute land to the poor might clash with someone's right to property. When this happens, the government has sometimes amended the Constitution to prioritize the Directive Principle for the good of the whole society."
        },
      ],
      summary_paragraph: "Fundamental Rights are a set of enforceable rights that limit the government's power, while Directive Principles are non-enforceable guidelines for the government to follow for the welfare of society. While they are meant to be complementary, they can sometimes come into conflict, leading to legal debates."
    },
    exam: {
      details: [
        {
          heading: "Complementary Nature",
          paragraph: "Fundamental Rights and Directive Principles are considered complementary. Fundamental Rights are 'negative injunctions' as they restrain the government from doing certain things (e.g., discrimination), while Directive Principles are 'positive obligations' as they exhort the government to do certain things (e.g., promote welfare, ensure equal pay)."
        },
        {
          heading: "Justiciability",
          paragraph: "Fundamental Rights are justiciable, meaning they are legally enforceable, and a citizen can approach a court for their violation. In contrast, Directive Principles are non-justiciable, meaning they cannot be enforced by the judiciary. The government is morally, but not legally, bound to implement them."
        },
        {
          heading: "Source of Conflict",
          paragraph: "A major source of conflict has arisen when the government tries to implement a Directive Principle (e.g., land reform laws to reduce inequality), which may come into conflict with a Fundamental Right (e.g., the right to property). This conflict has led to long legal battles and constitutional amendments."
        },
        {
          heading: "The Resolution of Conflict",
          paragraph: "The judiciary and the executive have taken different positions on this. The Supreme Court's verdict in the Kesavananda Bharati case established the 'basic structure' doctrine, stating that while the Parliament can amend any part of the Constitution, it cannot alter its basic features, which include many fundamental rights. This decision aimed to strike a balance between individual rights and the collective good."
        },
      ],
      summary_paragraph: "The relationship between Fundamental Rights and Directive Principles is a key aspect of the Constitution. Fundamental Rights are legally enforceable, individual-focused, and act as limitations on government power. Directive Principles are non-enforceable, society-focused, and serve as positive guidelines for the government. While complementary, conflicts have arisen, especially regarding socio-economic reforms. The Supreme Court's 'basic structure' doctrine provides a framework to balance these two constitutional pillars, preventing the abridgment of fundamental rights for the sake of implementing directives."
    }
  },
];

const chapter2QuestionBank = [
  {
    category: 'MCQ (1 Mark)',
    questions: [
      {
        question: "Fundamental Rights are listed in which part of the Indian Constitution?",
        options: [
          "A. Part I",
          "B. Part II",
          "C. Part III",
          "D. Part IV"
        ],
        answer: "C"
      },
      {
        question: "The term 'begar' refers to:",
        options: [
          "A. The right to education.",
          "B. Forced labour without payment.",
          "C. The right to form associations.",
          "D. The right to property."
        ],
        answer: "B"
      },
      {
        question: "The Right to Constitutional Remedies was called the 'heart and soul' of the Constitution by:",
        options: [
          "A. Jawaharlal Nehru.",
          "B. Sardar Patel.",
          "C. Dr. Rajendra Prasad.",
          "D. Dr. B.R. Ambedkar."
        ],
        answer: "D"
      },
      {
        question: "Preventive detention can be extended only for a maximum period of:",
        options: [
          "A. One month.",
          "B. Two months.",
          "C. Three months.",
          "D. Six months."
        ],
        answer: "C"
      },
      {
        question: "Which of the following is not a freedom guaranteed under the Right to Freedom?",
        options: [
          "A. Freedom of speech and expression.",
          "B. Freedom to assemble peacefully.",
          "C. Freedom to acquire property.",
          "D. Freedom to practice any profession."
        ],
        answer: "C"
      },
      {
        question: "The principle of secularism is nurtured by which of the following rights?",
        options: [
          "A. Right to Freedom of Religion.",
          "B. Right to Equality.",
          "C. Both A and B.",
          "D. None of the above."
        ],
        answer: "C"
      },
      {
        question: "The 44th amendment to the Constitution removed which right from the list of Fundamental Rights?",
        options: [
          "A. Right to Equality.",
          "B. Right to Property.",
          "C. Right to Freedom.",
          "D. Right to Constitutional Remedies."
        ],
        answer: "B"
      },
      {
        question: "Which writ is issued when a lower court has considered a case beyond its jurisdiction?",
        options: [
          "A. Habeas Corpus.",
          "B. Mandamus.",
          "C. Prohibition.",
          "D. Quo Warranto."
        ],
        answer: "C"
      },
      {
        question: "The National Human Rights Commission was established in which year?",
        options: [
          "A. 1950.",
          "B. 1976.",
          "C. 1993.",
          "D. 2005."
        ],
        answer: "C"
      },
      {
        question: "The Constitution forbids the employment of children below what age in dangerous jobs?",
        options: [
          "A. 12 years.",
          "B. 14 years.",
          "C. 16 years.",
          "D. 18 years."
        ],
        answer: "B"
      },
    ]
  },
  {
    category: '1-Marker Questions',
    questions: [
      {
        question: "What is a 'Bill of Rights'?",
        answer: [
          {
            heading: "Definition",
            paragraph: "A Bill of Rights is a list of rights of citizens that are mentioned and protected by the constitution of a country. It serves as a guarantee against government actions that violate these rights."
          }
        ]
      },
      {
        question: "What is the meaning of 'justiciable' in the context of rights?",
        answer: [
          {
            heading: "Legal Enforceability",
            paragraph: "'Justiciable' means that a right is legally enforceable, and a citizen can approach a court to seek a remedy for its violation. Fundamental Rights are justiciable, while Directive Principles are not."
          }
        ]
      },
      {
        question: "What is the primary function of the National Human Rights Commission (NHRC)?",
        answer: [
          {
            heading: "Protection of Human Rights",
            paragraph: "The primary function of the NHRC is to inquire into complaints of human rights violations, visit jails to study inmate conditions, and promote research in the field of human rights."
          }
        ]
      },
      {
        question: "Which article of the Indian Constitution deals with the right to life and personal liberty?",
        answer: [
          {
            heading: "Article 21",
            paragraph: "Article 21 of the Constitution provides that 'No person shall be deprived of his life or personal liberty except according to procedure established by law'."
          }
        ]
      },
      {
        question: "What is the writ of 'Habeas Corpus'?",
        answer: [
          {
            heading: "Meaning of Habeas Corpus",
            paragraph: "A writ of Habeas Corpus is a court order that requires an arrested person to be presented before it. The court can order the person to be set free if the arrest is found to be unlawful."
          }
        ]
      },
      {
        question: "What does the right to freedom of religion include?",
        answer: [
          {
            heading: "Freedom of Conscience",
            paragraph: "The right to freedom of religion includes the freedom of conscience and the right to freely profess, practice, and propagate any religion."
          }
        ]
      },
      {
        question: "What is the objective of the provisions of equal treatment for all religions?",
        answer: [
          {
            heading: "Secularism",
            paragraph: "The objective of these provisions is to sustain and nurture the principle of secularism, which means the government will not favor or discriminate against any particular religion."
          }
        ]
      },
      {
        question: "What is 'begar'?",
        answer: [
          {
            heading: "Forced Labour",
            paragraph: "'Begar' is a form of exploitation or forced labour without payment, which is prohibited under the Right against Exploitation in the Indian Constitution."
          }
        ]
      },
      {
        question: "What is the status of the 'Right to Property' in the Constitution today?",
        answer: [
          {
            heading: "Legal Right under Article 300 A",
            paragraph: "Originally a Fundamental Right, the Right to Property was removed from the list in 1978 by the 44th amendment and converted into a simple legal right under Article 300 A."
          }
        ]
      },
      {
        question: "Which rights are available in the South African Constitution but not in India?",
        answer: [
          {
            heading: "Examples of Rights",
            paragraph: "The South African Constitution includes rights like the Right to Dignity, Right to adequate housing, Right to health care, food, and water, which are not explicitly Fundamental Rights in the Indian Constitution."
          }
        ]
      }
    ]
  },
  {
    category: '2-Markers Questions',
    questions: [
      {
        question: "Explain the two main types of rights mentioned in the chapter, other than Fundamental Rights.",
        answer: [
          {
            heading: "Ordinary Legal Rights",
            paragraph: "These rights are protected and enforced by ordinary law. They can be changed by the legislature through the normal process of law-making, and are not guaranteed by the Constitution itself."
          },
          {
            heading: "Directive Principles of State Policy",
            paragraph: "These are a separate list of policy guidelines for the government. They are non-justiciable, meaning they cannot be enforced by a court. They are meant to serve as a moral guide for the government to achieve certain social and economic goals."
          }
        ]
      },
      {
        question: "What does the Right to Equality ensure regarding discrimination?",
        answer: [
          {
            heading: "Prohibition of Discrimination",
            paragraph: "The Right to Equality prohibits discrimination on grounds only of religion, race, caste, sex, or place of birth. It ensures equal access to public places like shops, hotels, and wells."
          },
          {
            heading: "Equality in Public Employment",
            paragraph: "It also prohibits any discrimination in public employment on the above-mentioned bases, ensuring that all citizens have equal opportunity for jobs in the government."
          }
        ]
      },
      {
        question: "Briefly explain the scope of the Right to Life and Personal Liberty (Article 21).",
        answer: [
          {
            heading: "Protection against Deprivation",
            paragraph: "This right ensures that no person can be deprived of their life or personal liberty except according to a procedure established by law. It protects individuals from arbitrary arrest and detention."
          },
          {
            heading: "Expanded Scope by Judiciary",
            paragraph: "The Supreme Court has expanded the scope of this right to include the right to live with human dignity, the right to shelter, and the right to livelihood, as these are essential for a meaningful life."
          }
        ]
      },
      {
        question: "What are the two forms of exploitation prohibited under the Right Against Exploitation?",
        answer: [
          {
            heading: "Prohibition of Human Trafficking and Forced Labour",
            paragraph: "The constitution prohibits the buying and selling of human beings and using them as slaves. It also prohibits 'begar' or any form of forced labor without payment."
          },
          {
            heading: "Prohibition of Child Labour",
            paragraph: "It forbids the employment of children below the age of 14 years in hazardous jobs like factories and mines, aiming to protect children and ensure their right to education."
          }
        ]
      },
      {
        question: "What are Cultural and Educational Rights for minorities?",
        answer: [
          {
            heading: "Right to Conserve Culture",
            paragraph: "Minorities, whether linguistic or religious, have the right to conserve their distinct language, script, and culture. This right ensures that India's diversity is protected and promoted."
          },
          {
            heading: "Right to Establish Educational Institutions",
            paragraph: "Minorities can establish and manage their own educational institutions to preserve and develop their culture. The government cannot discriminate against them while granting aid to these institutions."
          }
        ]
      },
      {
        question: "Explain the difference between fundamental rights and Directive Principles in terms of enforceability.",
        answer: [
          {
            heading: "Enforceability of Fundamental Rights",
            paragraph: "Fundamental Rights are legally enforceable or justiciable. If a person's fundamental rights are violated, they can directly approach a court to get them restored. The judiciary has the power to protect these rights."
          },
          {
            heading: "Enforceability of Directive Principles",
            paragraph: "Directive Principles are non-justiciable. This means that a person cannot go to court to ask the government to implement them. They serve as a moral force or guidelines that governments are expected to take seriously."
          }
        ]
      },
      {
        question: "What is the significance of the 44th Amendment Act, 1978, regarding the Right to Property?",
        answer: [
          {
            heading: "Change in Status of Right to Property",
            paragraph: "The 44th Amendment removed the Right to Property from the list of Fundamental Rights. It was a major step in the long-standing debate between fundamental rights and directive principles. The Supreme Court had already declared it was not part of the basic structure of the Constitution."
          },
          {
            heading: "Status as a Legal Right",
            paragraph: "After the amendment, the Right to Property was converted into a simple legal right under Article 300A of the Constitution. This allowed the government to acquire property for public welfare without the constraints of it being a fundamental right."
          }
        ]
      },
    ]
  },
  {
    category: '3-Markers Questions',
    questions: [
      {
        question: "What are the three main rights provided to a person accused of a crime to ensure a fair trial?",
        answer: [
          {
            heading: "Protection against Double Jeopardy",
            paragraph: "No person can be punished for the same offense more than once. This right ensures that a person is not harassed by repeated prosecutions for the same crime."
          },
          {
            heading: "Protection against Ex Post Facto Laws",
            paragraph: "No law shall declare any action as illegal from a backdate. This means a person can only be punished for an act if it was considered a crime at the time it was committed, ensuring legal predictability."
          },
          {
            heading: "Protection against Self-Incrimination",
            paragraph: "No person shall be asked to give evidence against himself or herself. This right protects individuals from being forced to confess to a crime, ensuring that the burden of proof lies with the prosecution."
          }
        ]
      },
      {
        question: "Explain the three main things contained in the Directive Principles of State Policy.",
        answer: [
          {
            heading: "Goals and Objectives",
            paragraph: "The Directive Principles list the goals and objectives that the society as a whole should adopt. These include promoting the welfare of the people, achieving social and economic justice, and raising the standard of living for all."
          },
          {
            heading: "Rights for Individuals",
            paragraph: "They also contain certain rights that individuals should enjoy in addition to their Fundamental Rights, such as the right to work, the right to adequate livelihood, and the right to early childhood care and education for children below six years of age."
          },
          {
            heading: "Policy Guidelines for the Government",
            paragraph: "The principles outline specific policies that the government should adopt. Examples include the promotion of cottage industries, prohibition of alcohol consumption, prevention of slaughter of useful cattle, and the formation of village panchayats."
          }
        ]
      },
      {
        question: "What are the restrictions that can be imposed on the Right to Freedom of Speech and Expression?",
        answer: [
          {
            heading: "Public Order and Peace",
            paragraph: "The freedom of speech and expression is not absolute. The government can impose restrictions on it to protect public order, peace, and morality, ensuring that one person's right does not endanger the safety and security of others."
          },
          {
            heading: "Reasonable Restrictions",
            paragraph: "The restrictions must be 'reasonable' and justifiable. For example, a person cannot be allowed to make a speech that incites violence or hatred, as it would disrupt public order."
          },
          {
            heading: "Preventing Misuse",
            paragraph: "While such restrictions are meant to prevent misuse, they can sometimes be misused by the administration to curb genuine protests. The vigilance of citizens and the judiciary is crucial to prevent such misuse."
          }
        ]
      },
      {
        question: "How did the judiciary expand the scope of the Right to Life and Personal Liberty?",
        answer: [
          {
            heading: "Right to Live with Human Dignity",
            paragraph: "The Supreme Court has ruled that the Right to Life is not just about the guarantee against the taking away of an individual's life but also includes the right to live with human dignity, free from exploitation."
          },
          {
            heading: "Right to Shelter and Livelihood",
            paragraph: "The court has held that the right to shelter and the right to livelihood are also included within the scope of the Right to Life, as no person can live without the means of living. This has led to the government taking on responsibilities like providing night shelters to the homeless."
          },
          {
            heading: "Right to a Fair and Speedy Trial",
            paragraph: "As demonstrated in the case of Machal Lalung, the judiciary has ruled that the right to life and liberty also includes the right to a fair and speedy trial. The absence of a trial for an extended period is a violation of this fundamental right."
          }
        ]
      },
      {
        question: "Explain the concept of 'secularism' as outlined in the Constitution with respect to religious freedom and equality.",
        answer: [
          {
            heading: "Freedom to Practice Any Religion",
            paragraph: "The Constitution guarantees every individual the freedom to choose, practice, and propagate any religion they wish, or no religion at all. This is a fundamental aspect of secularism, ensuring personal choice and liberty."
          },
          {
            heading: "Equal Treatment by the Government",
            paragraph: "Secularism also means that the government must extend equal treatment to all religions. India does not have an official state religion. The state cannot favor one religion over another in matters of employment or education, thereby ensuring the neutrality of the government in religious matters."
          },
          {
            heading: "Non-Interference, with Exceptions",
            paragraph: "While the government generally does not interfere in religious affairs, it can impose reasonable restrictions on religious practices for the sake of public order, morality, and health. It can also interfere to root out social evils like 'sati', ensuring that religious freedom does not become a tool for social injustice."
          }
        ]
      },
    ]
  },
  {
    category: '4-Markers Questions',
    questions: [
      {
        question: "Explain the four main aspects of the Right to Equality as a fundamental right.",
        answer: [
          {
            heading: "Equality Before Law",
            paragraph: "The Constitution guarantees that every person is equal before the law. This means that all citizens, regardless of their social standing, are subject to the same laws and legal procedures. It establishes the principle that no one is above the law."
          },
          {
            heading: "Prohibition of Discrimination",
            paragraph: "This right explicitly prohibits the state from discriminating against any citizen on grounds of religion, race, caste, sex, or place of birth. It also ensures equal access to public places such as shops, hotels, wells, and roads."
          },
          {
            heading: "Abolition of Untouchability and Titles",
            paragraph: "The Right to Equality strives to eliminate social evils. It abolishes the practice of 'untouchability,' a crude manifestation of inequality. It also abolishes titles, except for military or academic honors, to ensure a sense of equality of dignity and status among all citizens."
          },
          {
            heading: "Equality of Opportunity in Public Employment",
            paragraph: "This right ensures that all citizens have equal opportunity for employment in public services. The Constitution also clarifies that policies like 'reservations' for backward classes are not a violation of this right but are necessary to ensure that historically disadvantaged sections of society can also have a fair chance."
          }
        ]
      },
      {
        question: "What is the importance of having rights, and how do they limit the powers of the government?",
        answer: [
          {
            heading: "Importance for a Democratic Society",
            paragraph: "Rights are essential for a democracy because they protect individuals from potential threats to their life and liberty. They provide a sense of security and fairness, allowing people to live together peacefully despite their diverse backgrounds. The existence of a 'Bill of Rights' in the constitution itself is a hallmark of a healthy democracy."
          },
          {
            heading: "Limitation on Government's Power",
            paragraph: "The constitution sets fundamental limits on the government's power by specifying certain rights that it can never violate. These limits are non-negotiable and prevent the government from acting in an arbitrary or tyrannical manner. For example, the government cannot arbitrarily arrest a citizen or prevent them from practicing their religion."
          },
          {
            heading: "Protection against Unfair Laws",
            paragraph: "Fundamental Rights place checks on both the legislative and executive branches. If a law passed by the legislature or an action taken by the executive violates a fundamental right, the judiciary has the power to declare it illegal. This ensures that even a popularly elected government cannot pass laws that are patently unfair."
          },
          {
            heading: "Enabling Democratic Participation",
            paragraph: "Rights like the freedom of speech, expression, and association enable citizens to participate effectively in the democratic process. They can protest against government policies, express dissent, and form groups to advocate for their interests. Without these rights, a democracy would exist only on paper."
          }
        ]
      },
      {
        question: "Discuss the relationship between Fundamental Rights and Directive Principles, highlighting their complementary nature and how conflicts between them have been addressed.",
        answer: [
          {
            heading: "Complementary Roles",
            paragraph: "Fundamental Rights and Directive Principles are seen as complementary. Fundamental Rights are primarily negative obligations on the state, restraining it from acting in certain ways. Directive Principles, on the other hand, are positive obligations, guiding the state to actively work towards the welfare of society and establish social and economic justice. They both work towards a common goal of a just society."
          },
          {
            heading: "The Source of Conflict",
            paragraph: "A conflict arises when the government, in its attempt to implement a Directive Principle (e.g., land reform to achieve equitable distribution of resources), passes a law that appears to violate a Fundamental Right (e.g., the right to property). This conflict led to a long legal battle between the executive and the judiciary."
          },
          {
            heading: "The Judiciary's Position",
            paragraph: "The judiciary initially held the view that Fundamental Rights are so important that they cannot be abridged, even for implementing Directive Principles. However, after the Kesavananda Bharati case, the Supreme Court introduced the 'basic structure' doctrine, which holds that while Parliament can amend any part of the constitution, it cannot alter its fundamental or 'basic' features."
          },
          {
            heading: "Resolution and Balancing",
            paragraph: "The conflict was resolved by acknowledging that both are important pillars of the constitution. The right to property was eventually removed from the list of Fundamental Rights, making it a legal right, which gave the government more power to implement land reforms. The 'basic structure' doctrine provides a way to balance the need for socio-economic reforms with the protection of core constitutional values."
          }
        ]
      },
      {
        question: "What are the main provisions under the Right to Freedom of Religion? Discuss the limitations of this right.",
        answer: [
          {
            heading: "Freedom of Conscience and Worship",
            paragraph: "The right grants every individual the freedom of conscience and the right to freely profess, practice, and propagate their religion. This means a person can choose to follow any religion or no religion at all. They can also perform their religious rituals and ceremonies and spread information about their religion."
          },
          {
            heading: "Freedom to Manage Religious Affairs",
            paragraph: "Religious groups have the freedom to manage their own affairs. This includes the right to establish and maintain institutions for religious and charitable purposes and to own and acquire property related to these institutions. This ensures religious communities can function independently."
          },
          {
            heading: "Restrictions for Public Order",
            paragraph: "The right is not unlimited. The government can impose 'reasonable restrictions' on the practice of religion to protect public order, morality, and health. For example, a religious procession that could lead to a riot can be denied permission. This is to ensure that religious freedom does not endanger the peace and safety of society."
          },
          {
            heading: "Interference to End Social Evils",
            paragraph: "The government can also interfere in religious matters to reform and root out social evils. This is a crucial limitation that allows the state to ban practices like 'sati' or 'bigamy', ensuring that religious freedom cannot be used as a justification for perpetuating social injustice."
          }
        ]
      }
    ]
  },
  {
    category: '5-Markers Questions',
    questions: [
      {
        question: "An activist working among the poor says that the poor don't need Fundamental Rights. What they need are Directive Principles to be made legally binding. Do you agree with this? Give your reasons based on the chapter.",
        answer: [
          {
            heading: "Arguments for Directive Principles",
            paragraph: "The activist's position is based on the idea that the poor's primary needs are socio-economic. Directive Principles address these needs by guiding the government to work towards adequate livelihood, equal pay, right to work, and education. Making them legally binding would force the government to focus on these issues directly, which could seem more beneficial for the poor."
          },
          {
            heading: "Arguments against the Activist's Position",
            paragraph: "However, this position is flawed because it creates a false choice between Fundamental Rights and Directive Principles. Fundamental Rights are crucial for the poor. The Right against Exploitation protects them from forced labor and child labor. The Right to Equality protects them from discrimination based on caste and social status. The Right to Life (Article 21) has been expanded by the judiciary to include the right to shelter and livelihood, which are direct benefits for the poor."
          },
          {
            heading: "Interdependence of Rights",
            paragraph: "Fundamental Rights and Directive Principles are complementary. Without Fundamental Rights, the poor would have no legal recourse against a government that might violate their basic liberties, even in the name of implementing welfare policies. For instance, without the Right to Constitutional Remedies, they couldn't approach a court if a government scheme was implemented unfairly."
          },
          {
            heading: "Rights as Enablers",
            paragraph: "Fundamental Rights are not just protections but also enablers. The freedom of speech and expression allows the poor to organize, protest, and voice their demands, holding the government accountable for implementing Directive Principles. Without these rights, they would be voiceless and unable to advocate for their own interests."
          },
          {
            heading: "Conclusion",
            paragraph: "Therefore, I do not agree with the activist. The poor need both. They need Directive Principles to be implemented to improve their lives, but they need Fundamental Rights even more to protect their basic human dignity and to provide them with the tools to demand the implementation of those very directives. Taking away fundamental rights would leave them completely vulnerable and powerless."
          }
        ]
      },
      {
        question: "A human rights group found that a large number of ration cardholders do not know about the quantity of food grains they can purchase. It requested the court to order the government to improve its public distribution system. Which different rights does this case involve, how are they interlinked, and should they form part of the right to life?",
        answer: [
          {
            heading: "Rights Involved",
            paragraph: "This case involves several rights. Firstly, the **Right to Information** is implicitly involved, as citizens are not aware of their entitlements. Secondly, the **Right to Life and Personal Liberty** is at the core, as starvation and hunger are a direct threat to life. Thirdly, the **Right to Constitutional Remedies** is being exercised by the human rights group, as they are approaching the court for the enforcement of these rights."
          },
          {
            heading: "Interlinking of Rights",
            paragraph: "These rights are deeply interlinked. The Right to Life is a foundational right, but its realization often depends on other rights. The ability to access adequate food is a direct extension of the Right to Life. This access, in turn, requires the Right to Information, as citizens need to know their entitlements under government schemes. Finally, the Right to Constitutional Remedies is the crucial link that makes all these rights meaningful and enforceable by providing a path to seek justice when they are violated."
          },
          {
            heading: "Rights as Part of the Right to Life",
            paragraph: "Yes, these rights should form part of the Right to Life. The Supreme Court has already expanded the scope of the Right to Life (Article 21) to include the right to live with human dignity and the right to livelihood. The right to food and information about food entitlements is a necessary precondition for a person to live with dignity and maintain a livelihood. A life threatened by starvation is a clear violation of the Right to Life, and therefore, the means to prevent starvation, such as access to food grains and information about them, should be considered an integral part of it."
          },
          {
            heading: "Judicial Activism",
            paragraph: "This scenario is a classic example of judicial activism, where the court, through its interpretation, expands the scope of a fundamental right to address a new challenge or a failing in governance. By linking the right to food and information to the Right to Life, the court can compel the government to take positive action and fulfill its constitutional obligations towards its citizens."
          },
          {
            heading: "State's Obligation",
            paragraph: "The case highlights the government's obligation to ensure the well-being of its people, which is a Directive Principle. By making the right to food a part of the Fundamental Right to Life, the judiciary is essentially making a Directive Principle legally enforceable. This demonstrates the dynamic relationship between these two constitutional pillars and the role of the judiciary in ensuring the state's accountability."
          }
        ]
      }
    ]
  },
  {
    category: '6-Markers Questions',
    questions: [
      {
        question: "Read the statement by Somnath Lahiri in the Constituent Assembly: 'I feel that many of these fundamental rights have been framed from the point of view of a police constable... you will find that very minimum rights have been conceded and are almost invariably followed by a proviso.' Do you agree with him? Give arguments and instances from the chapter.",
        answer: [
          {
            heading: "Somnath Lahiri's Perspective",
            paragraph: "Somnath Lahiri's statement reflects a concern that the Fundamental Rights in the draft constitution were not absolute but were heavily qualified by provisos and restrictions. He feared that these limitations were a compromise that would make the rights ineffective, giving the government, particularly law enforcement (the 'police constable'), excessive power to curb citizens' freedoms."
          },
          {
            heading: "Arguments for Agreement",
            paragraph: "There are instances in the chapter that support his view. The Right to Freedom of speech and expression is explicitly stated to be subject to 'reasonable restrictions' for public order, peace, and morality. The provision for 'preventive detention' is another example, where a person can be arrested simply based on an apprehension of unlawful activity, which appears to be a powerful tool for law enforcement that could be misused, as the chapter itself notes."
          },
          {
            heading: "Arguments against Agreement",
            paragraph: "However, a counter-argument is that these restrictions are necessary for a functional democracy. Absolute rights, as the chapter explains, would threaten the freedom of others and endanger law and order. The framers had to balance individual liberty with the interests of the larger society. The restrictions are intended to prevent anarchy and protect the rights of all, not just a few."
          },
          {
            heading: "The Role of the Judiciary",
            paragraph: "The power of the judiciary provides a crucial check on the misuse of these restrictions. The Supreme Court and High Courts have the power of judicial review, and they can strike down any unreasonable restrictions imposed by the government. This judicial oversight ensures that the 'police constable' cannot arbitrarily violate rights, thereby validating the framers' foresight in establishing an independent judiciary."
          },
          {
            heading: "Rights of the Accused",
            paragraph: "Furthermore, the Constitution provides robust rights for the accused, such as protection against double jeopardy and forced self-incrimination. These safeguards are specifically designed to ensure a fair trial and prevent police excesses, directly addressing the concern that rights were framed from a 'police constable's' point of view."
          },
          {
            heading: "Conclusion",
            paragraph: "In conclusion, while Somnath Lahiri's concerns about the restrictive nature of rights were valid, the chapter suggests that the constitution-makers provided a solution by establishing an intelligent system of checks and balances. The judiciary's role as the protector of rights and the inclusion of specific safeguards for the accused ensure that the rights are not merely a formality but are real and enforceable, thereby mitigating the risk of them being easily violated by the state."
          }
        ]
      },
      {
        question: "Several reports show that caste groups previously associated with scavenging are forced to continue in this job. Their children are discouraged from pursuing education. Which of their Fundamental Rights are being violated? Write six points explaining how these rights are violated.",
        answer: [
          {
            heading: "Violation of Right to Equality",
            paragraph: "The forcing of a specific caste group to continue in the job of scavenging is a direct violation of the Right to Equality (Article 14). This practice, based on caste, constitutes clear discrimination and denies them equality before the law and equal protection of the laws. The refusal to give them other jobs also violates the principle of equality of opportunity."
          },
          {
            heading: "Violation of Prohibition of Discrimination",
            paragraph: "This is a violation of Article 15, which prohibits discrimination on the grounds of caste. By denying them other job opportunities and discouraging their children from education based on their caste, those in authority are engaging in a clear and illegal act of discrimination."
          },
          {
            heading: "Violation of Abolition of Untouchability",
            paragraph: "The act of forcing a caste group to continue in a job associated with scavenging perpetuates the practice of untouchability, which is abolished under the Right to Equality (Article 17). It treats them as an inferior group, which is a violation of their dignity and status as citizens."
          },
          {
            heading: "Violation of Right Against Exploitation",
            paragraph: "The forcing of people into a job against their will, especially without proper compensation or working conditions, is a form of forced labor or 'begar.' This is a direct violation of the Right Against Exploitation (Article 23), which prohibits all forms of forced labor and human trafficking."
          },
          {
            heading: "Violation of Right to Education",
            paragraph: "The discouragement of children from pursuing education is a violation of the Right to Education. This right is fundamental for children, and by denying them access to it, their future opportunities are being curtailed, and they are being pushed into a cycle of poverty and social disadvantage, which is unconstitutional."
          },
          {
            heading: "Violation of Right to Life with Dignity",
            paragraph: "The judiciary has expanded the scope of the Right to Life (Article 21) to include the right to live with human dignity. The practice of forcing people into scavenging and denying them other opportunities is an assault on their dignity and self-respect, and thus a violation of this fundamental right. The right to a dignified life is being denied to them and their children."
          }
        ]
      }
    ]
  }
];

// Main App component
const App = () => {
  const [view, setView] = useState('infographic');
  const [explanationLevel, setExplanationLevel] = useState('exam');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [chapter, setChapter] = useState('chapter1');

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const getTopicsData = () => {
    return chapter === 'chapter1' ? chapter1TopicsData : chapter2TopicsData;
  };

  const getQuestionBank = () => {
    return chapter === 'chapter1' ? chapter1QuestionBank : chapter2QuestionBank;
  };

  const renderTopicsPage = () => (
    <div className="p-6 sm:p-10">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setExplanationLevel('child')}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
            ${explanationLevel === 'child' ? 'bg-blue-600 text-white transform scale-105' : 'bg-blue-200 text-blue-800 hover:bg-blue-300'}`}
        >
          12 Year Old
        </button>
        <button
          onClick={() => setExplanationLevel('exam')}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
            ${explanationLevel === 'exam' ? 'bg-green-600 text-white transform scale-105' : 'bg-green-200 text-green-800 hover:bg-green-300'}`}
        >
          Exam Writing
        </button>
      </div>

      <div className="space-y-10">
        {getTopicsData().map((topic) => (
          <section key={topic.id} className="bg-white border-l-4 border-gray-400 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">{topic.emoji}</span> {topic.title}
            </h2>
            <div className="text-lg">
              {topic[explanationLevel].details.map((detail, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-600 mb-2">{detail.heading}:</h3>
                  <p className="ml-4">{detail.paragraph}</p>
                </div>
              ))}
              {topic[explanationLevel].summary_paragraph && (
                <>
                  <p className="mt-4 font-semibold text-gray-600">Summary:</p>
                  <p>{topic[explanationLevel].summary_paragraph}</p>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );

  const renderChapter1Infographic = () => (
    <main className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Section 1: What is a Constitution? */}
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-1">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">💡</span> What is a Constitution?
        </h2>
        <ul className="list-none space-y-3 text-lg">
          <li>
            <strong className="text-blue-600">Definition:</strong> A body of fundamental principles according to which a state is constituted or governed.
          </li>
          <li>
            <strong className="text-blue-600">Purpose:</strong> A document or set of documents that performs essential functions for a society.
          </li>
        </ul>
      </section>

      {/* Section 2: Functions of a Constitution */}
      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-2">
        <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🛠️</span> Functions of a Constitution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center"><span className="text-xl mr-2">🤝</span> 1. Coordination & Assurance</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Basic, publicly known, enforceable rules.</li>
              <li>Minimal coordination among diverse members.</li>
              <li>Ensures security & predictability.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center"><span className="text-xl mr-2">⚖️</span> 2. Decision-Making Powers</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Allocates power in society.</li>
              <li>Decides who makes laws (e.g., Parliament).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center"><span className="text-xl mr-2">🚫</span> 3. Limits on Government Powers</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sets fundamental limits on government.</li>
              <li>Guarantees Fundamental Rights (speech, conscience, etc.).</li>
              <li>Limits can be applied during emergencies.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center"><span className="text-xl mr-2">🎯</span> 4. Aspirations & Goals (Enabling Framework)</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Enables government to do positive things.</li>
              <li>Expresses societal aspirations (e.g., ending discrimination).</li>
              <li>Supported by Preamble, Fundamental Rights, DPSP.</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-green-600 mb-2 flex items-center"><span className="text-xl mr-2">🆔</span> 5. Fundamental Identity of a People</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Expresses collective identity through governance norms.</li>
              <li>Defines political & moral identity.</li>
              <li>Embodies national identity (e.g., non-ethnic citizenship in India).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Authority of a Constitution */}
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-3">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">👑</span> Authority of a Constitution: What Makes it Effective?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">📢</span> 1. Mode of Promulgation</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Credibility of Makers (popular leaders).</li>
              <li>Reflects National Consensus.</li>
              <li>Public Acceptance (people abide by it).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">📜</span> 2. Substantive Provisions</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gives everyone a reason to comply.</li>
              <li>Preserves freedom & equality.</li>
              <li>Avoids oppression/privilege.</li>
              <li>Framework for basic justice.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">🏛️</span> 3. Balanced Institutional Design</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Fragments power (Legislature, Executive, Judiciary, Election Commission).</li>
              <li>Intelligent Checks & Balances.</li>
              <li>Flexibility vs. Rigidity balance.</li>
              <li>Indian Constitution is a 'living document'.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: How was the Indian Constitution Made? */}
      <section className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-3">
        <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🏗️</span> How was the Indian Constitution Made?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <h3 className="font-semibold text-yellow-600 mb-2 flex items-center"><span className="text-xl mr-2">👥</span> Constituent Assembly</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>First Sitting: 9 Dec 1946.</li>
              <li>Reassembled (Divided India): 14 Aug 1947.</li>
              <li>Members: Indirectly elected by Provincial Legislative Assemblies.</li>
              <li>Cabinet Mission Plan Composition:
                <ul className="list-circle list-inside ml-4">
                  <li>Seats Proportional to Population (1:10,00,000).</li>
                  <li>Provinces (British Rule): 292 members.</li>
                  <li>Princely States: Min. 93 seats.</li>
                  <li>Community Distribution (Muslims, Sikhs, General).</li>
                </ul>
              </li>
              <li>Impact of Partition: Reduced to 299 members.</li>
              <li>Adopted: 26 Nov 1949.</li>
              <li>Signed: 24 Jan 1950 (284 members).</li>
              <li>Came into Force: 26 Jan 1950.</li>
              <li>Broadly Representative: All religions, 28 SC members.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-600 mb-2 flex items-center"><span className="text-xl mr-2">🗣️</span> Principle of Deliberation</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Public Reason: Emphasis on discussion & reasoned argument.</li>
              <li>Legitimate Disagreements: Debated key principles (centralization, judiciary powers).</li>
              <li>Universal Suffrage: Passed without debate (democratic commitment).</li>
              <li>Committees: 8 major committees drafted provisions.</li>
              <li>Consensus: Attempted to reach consensus, arguments responded to in writing.</li>
              <li>Duration: 166 days over 2 years, 11 months; open sessions.</li>
            </ul>
            <h3 className="font-semibold text-yellow-600 mt-4 mb-2 flex items-center"><span className="text-xl mr-2">📜</span> Inheritance of Nationalist Movement</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Gave concrete shape to principles forged during freedom struggle.</li>
              <li>Objectives Resolution (1946, Nehru): Encapsulated aspirations & values.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Main Points of the Objectives Resolution */}
      <section className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-3">
        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🌟</span> Main Points of the Objectives Resolution
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li><strong className="text-red-600">Independent, Sovereign, Republic:</strong> India to be an independent, sovereign, republic.</li>
          <li><strong className="text-red-600">Union of Territories:</strong> Union of British Indian territories, Indian States, and willing parts.</li>
          <li><strong className="text-red-600">Autonomous Units:</strong> Union territories to be autonomous, except for assigned powers.</li>
          <li><strong className="text-red-600">Power from the People:</strong> All power & authority from the people.</li>
          <li><strong className="text-red-600">Guaranteed Justice & Freedoms:</strong> Social, economic, political justice; equality; fundamental freedoms (speech, belief, etc.).</li>
          <li><strong className="text-red-600">Safeguards for Minorities:</strong> Adequate safeguards for minorities, backward & tribal classes.</li>
          <li><strong className="text-red-600">Territorial Integrity:</strong> Maintained according to justice & international law.</li>
          <li><strong className="text-red-600">World Peace:</strong> India to contribute to world peace & welfare of mankind.</li>
        </ul>
      </section>

      {/* Section 6: Institutional Arrangements & Borrowed Provisions */}
      <section className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-3">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🌐</span> Institutional Arrangements & Borrowed Provisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <h3 className="font-semibold text-teal-600 mb-2 flex items-center"><span className="text-xl mr-2">⚙️</span> Balanced Governmental Arrangements</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Adopted Parliamentary Form & Federal Arrangement.</li>
              <li>Distributed powers: Legislature, Executive, Judiciary.</li>
              <li>Distributed powers: States & Central Government.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-teal-600 mb-2 flex items-center"><span className="text-xl mr-2">🌍</span> Provisions Adapted from Other Countries</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-teal-600">British Constitution:</strong> First Past the Post, Parliamentary Government, Rule of Law, Speaker's role, Law-making procedure.</li>
              <li><strong className="text-teal-600">Irish Constitution:</strong> Directive Principles of State Policy.</li>
              <li><strong className="text-teal-600">French Constitution:</strong> Principles of Liberty, Equality, Fraternity.</li>
              <li><strong className="text-teal-600">United States Constitution:</strong> Fundamental Rights, Judicial Review, Judiciary Independence.</li>
              <li><strong className="text-teal-600">Canadian Constitution:</strong> Quasi-federal government (strong center), Residual Powers.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );

  const renderChapter2Infographic = () => (
    <main className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Section 1: Bill of Rights & Fundamental Rights */}
      <section className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-1">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">📜</span> Bill of Rights & Fundamental Rights
        </h2>
        <ul className="list-none space-y-3 text-lg">
          <li>
            <strong className="text-indigo-600">Bill of Rights:</strong> A list of rights mentioned and protected by the constitution.
          </li>
          <li>
            <strong className="text-indigo-600">Fundamental Rights:</strong> Specially protected rights listed in Part III of the Indian Constitution.
          </li>
        </ul>
      </section>

      {/* Section 2: Six Fundamental Rights */}
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-2">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">6️⃣</span> The Six Fundamental Rights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">🤝</span> Right to Equality</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Equality before law.</li>
              <li>No discrimination on religion, race, caste, sex.</li>
              <li>Abolition of untouchability & titles.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">🗣️</span> Right to Freedom</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Freedom of speech, expression, assembly.</li>
              <li>Right to life and personal liberty.</li>
              <li>Rights of the accused.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">🚫</span> Right against Exploitation</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Prohibition of forced labour & human trafficking.</li>
              <li>Prohibition of child labour.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">🕌</span> Right to Freedom of Religion</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Freedom of conscience and worship.</li>
              <li>Freedom to manage religious affairs.</li>
              <li>Equality of all religions.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">📚</span> Cultural & Educational Rights</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Protection of minority language & culture.</li>
              <li>Right to establish educational institutions.</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-purple-600 mb-2 flex items-center"><span className="text-xl mr-2">⚖️</span> Right to Constitutional Remedies</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Right to approach courts for enforcement of rights.</li>
              <li>Dr. Ambedkar called it the 'heart and soul' of the Constitution.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Directive Principles vs Fundamental Rights */}
      <section className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-3">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🔄</span> Fundamental Rights vs. Directive Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <h3 className="font-semibold text-teal-600 mb-2 flex items-center"><span className="text-xl mr-2">➡️</span> Fundamental Rights</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Restrain government from doing things.</li>
              <li>Protect individual rights.</li>
              <li>Justiciable (enforceable by courts).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-teal-600 mb-2 flex items-center"><span className="text-xl mr-2">⬅️</span> Directive Principles</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Exhort government to do things.</li>
              <li>Ensure well-being of the entire society.</li>
              <li>Non-justiciable (not enforceable by courts).</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );

  const renderQuestionBankPage = () => (
    <div className="p-6 sm:p-10">
      <div className="space-y-12">
        {getQuestionBank().map((category, catIndex) => (
          <section key={catIndex}>
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-indigo-500 pb-2 mb-6">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
                  <div
                    className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => toggleQuestion(`${chapter}-${catIndex}-${qIndex}`)}
                  >
                    <p className="font-semibold text-xl">
                      <span className="text-indigo-600 mr-2">{qIndex + 1}.</span> {q.question}
                    </p>
                    <span className="text-2xl text-indigo-600">
                      {activeQuestion === `${chapter}-${catIndex}-${qIndex}` ? '−' : '+'}
                    </span>
                  </div>
                  {activeQuestion === `${chapter}-${catIndex}-${qIndex}` && (
                    <div className="p-6 pt-0">
                      {category.category === 'MCQ (1 Mark)' ? (
                        <div className="space-y-2 text-lg ml-6">
                          {q.options.map((option, optIndex) => (
                            <p key={optIndex} className={`${q.answer === option.charAt(0) ? 'font-bold text-green-700' : 'text-gray-600'}`}>
                              {option}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4 ml-6">
                          {q.answer.map((pointer, pIndex) => (
                            <div key={pIndex} className="text-lg">
                              <h4 className="font-bold text-gray-700">
                                {pIndex + 1}. {pointer.heading}:
                              </h4>
                              <p className="mt-1 text-gray-600">{pointer.paragraph}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 font-inter text-gray-800">
      <script src="https://cdn.tailwindcss.com"></script> {/* Tailwind CSS CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" /> {/* Inter Font */}

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-10 text-center rounded-t-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 leading-tight">
            🇮🇳 The Indian Constitution 📜
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            {chapter === 'chapter1' ? 'Chapter 1: Why and How?' : 'Chapter 2: Rights in the Indian Constitution'}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => { setChapter('chapter1'); setView('infographic'); }}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
                ${chapter === 'chapter1' ? 'bg-white text-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            >
              Chapter 1
            </button>
            <button
              onClick={() => { setChapter('chapter2'); setView('infographic'); }}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
                ${chapter === 'chapter2' ? 'bg-white text-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
            >
              Chapter 2
            </button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setView('infographic')}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
                ${view === 'infographic' ? 'bg-white text-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              Infographic View
            </button>
            <button
              onClick={() => setView('topics')}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
                ${view === 'topics' ? 'bg-white text-green-700' : 'bg-green-500 text-white hover:bg-green-600'}`}
            >
              Topics Explained
            </button>
            <button
              onClick={() => setView('question_bank')}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg
                ${view === 'question_bank' ? 'bg-white text-purple-700' : 'bg-purple-500 text-white hover:bg-purple-600'}`}
            >
              Question Bank
            </button>
          </div>
        </header>

        {chapter === 'chapter1' && view === 'infographic' && renderChapter1Infographic()}
        {chapter === 'chapter1' && view === 'topics' && renderTopicsPage()}
        {chapter === 'chapter1' && view === 'question_bank' && renderQuestionBankPage()}

        {chapter === 'chapter2' && view === 'infographic' && renderChapter2Infographic()}
        {chapter === 'chapter2' && view === 'topics' && renderTopicsPage()}
        {chapter === 'chapter2' && view === 'question_bank' && renderQuestionBankPage()}

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 sm:p-8 text-center rounded-b-3xl mt-8">
          <p className="text-sm opacity-80">
            Infographic created based on Chapters 1 & 2 of NCERT's 'Indian Constitution at Work'.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
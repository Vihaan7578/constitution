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
  }
  // Additional topics would continue here...
];

// Sample data for demonstration - you can add the complete data from const.jsx
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
      }
    ]
  }
];

// Chapter 2 data would go here...
const chapter2TopicsData = [];
const chapter2QuestionBank = [];

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

      <section className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 shadow-md col-span-1 lg:col-span-2">
        <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
          <span className="text-3xl mr-3">🛠️</span> Functions of a Constitution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center">
              <span className="text-xl mr-2">🤝</span> Coordination & Assurance
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Basic, publicly known, enforceable rules.</li>
              <li>Minimal coordination among diverse members.</li>
              <li>Ensures security & predictability.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2 flex items-center">
              <span className="text-xl mr-2">⚖️</span> Decision-Making Powers
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Allocates power in society.</li>
              <li>Decides who makes laws (e.g., Parliament).</li>
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

        {/* Main content area */}
        {chapter === 'chapter1' && view === 'infographic' && renderChapter1Infographic()}
        {view === 'topics' && renderTopicsPage()}
        {view === 'question_bank' && renderQuestionBankPage()}

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
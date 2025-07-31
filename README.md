# 🇮🇳 Indian Constitution Study App 📜

An interactive web application designed to help students learn about the Indian Constitution through multiple engaging formats including infographics, detailed explanations, and comprehensive question banks.

## ✨ Features

- **📊 Interactive Infographics**: Visual representations of constitutional concepts
- **👶 Dual Learning Modes**: 
  - 12-year-old friendly explanations
  - Exam-focused detailed content
- **📚 Comprehensive Topics**: Covers Chapters 1 & 2 of NCERT's "Indian Constitution at Work"
- **❓ Question Banks**: Multiple choice questions, short answers, and long-form questions
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful, modern interface with smooth animations

## 📖 Content Coverage

### Chapter 1: Why and How?
- What is a Constitution?
- Functions of a Constitution
- Authority of a Constitution
- How was the Indian Constitution Made?
- Objectives Resolution
- Institutional Arrangements & Borrowed Provisions

### Chapter 2: Rights in the Indian Constitution
- Importance of Rights & Bill of Rights
- Fundamental Rights in the Indian Constitution
- Right to Equality
- Right to Freedom
- Right Against Exploitation
- Right to Freedom of Religion
- Cultural and Educational Rights
- Right to Constitutional Remedies

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/indian-constitution-study-app.git
   cd indian-constitution-study-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
indian-constitution-study-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # App-specific styles
│   ├── index.js        # React app entry point
│   └── index.css       # Global styles
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Usage

1. **Navigation**: Use the header buttons to switch between chapters and view modes
2. **Learning Modes**: Toggle between "12 Year Old" and "Exam Writing" explanations
3. **Views**: 
   - **Infographic View**: Visual overview of concepts
   - **Topics Explained**: Detailed explanations with dual complexity levels
   - **Question Bank**: Practice questions with expandable answers

## 🎨 Customization

The app uses Tailwind CSS for styling. You can customize:
- Colors and themes in the component classes
- Add new topics by extending the data arrays
- Modify the UI layout in the render functions

## 📚 Adding Content

To add more content:

1. **Topics**: Add new objects to `chapter1TopicsData` or `chapter2TopicsData`
2. **Questions**: Extend `chapter1QuestionBank` or `chapter2QuestionBank`
3. **Structure**: Each topic should have both `child` and `exam` level content

Example topic structure:
```javascript
{
  id: 'topic-id',
  title: 'Topic Title',
  emoji: '📖',
  child: {
    details: [/* simplified explanations */],
    summary_paragraph: "Simple summary"
  },
  exam: {
    details: [/* detailed explanations */],
    summary_paragraph: "Comprehensive summary"
  }
}
```

## 🚀 Deployment

### GitHub Pages
1. Update the `homepage` field in `package.json`
2. Run `npm run deploy`

### Other Platforms
- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your GitHub repo for instant deployment
- **Heroku**: Use the Node.js buildpack

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Content based on NCERT's "Indian Constitution at Work"
- Built with React and Tailwind CSS
- Icons and emojis for enhanced visual learning

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the documentation
- Review the code comments for implementation details

---

**Made with ❤️ for students learning about the Indian Constitution** 
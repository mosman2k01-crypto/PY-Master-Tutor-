import React, { useState } from 'react';
import { 
  BookOpen, 
  Code2, 
  Flame, 
  Bot, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  Search,
  Send,
  Zap,
  Info
} from 'lucide-react';

// --- CURRICULUM DATA WITH CODE TERM BREAKDOWNS ---
const MODULES = [
  {
    id: 'mod-1',
    title: '1. Variables & Data Types',
    badge: 'Basics',
    summary: 'How computers store numbers, text, and flags in memory.',
    terms: [
      { token: 'patient_age', label: 'Variable Name', desc: 'A custom label pointing to stored data in memory.' },
      { token: '=', label: 'Assignment Operator', desc: 'Stores the right-hand value inside the left-hand variable.' },
      { token: '28', label: 'Integer (int)', desc: 'Whole number with no decimal point.' },
      { token: '"Normal"', label: 'String (str)', desc: 'Text data enclosed in quotes.' },
      { token: 'True', label: 'Boolean (bool)', desc: 'Binary flag representing truth or falsity (Capital T required).' }
    ],
    codeSnippet: `patient_age = 28\ndosage_mg = 12.5\ndiagnosis = "Normal"\nis_admitted = True\n\nprint(f"Age: {patient_age}, Status: {diagnosis}")`,
    challenge: {
      instruction: 'Create a variable named "heart_rate" with value 72 and print it.',
      starterCode: '# Create heart_rate variable below:\n',
      expectedKeyword: 'heart_rate',
      test: (code) => code.includes('heart_rate') && code.includes('72')
    }
  },
  {
    id: 'mod-2',
    title: '2. Conditionals (if, elif, else)',
    badge: 'Logic',
    summary: 'Teach your code to make clinical and computational decisions.',
    terms: [
      { token: 'if', label: 'Conditional Keyword', desc: 'Evaluates if the subsequent expression is True.' },
      { token: '>=', label: 'Comparison Operator', desc: 'Checks if left value is greater than or equal to right.' },
      { token: ':', label: 'Block Opener (Colon)', desc: 'Mandatory in Python; announces the start of an indented block.' },
      { token: '    ', label: '4-Space Indentation', desc: 'Defines code that belongs inside the condition block.' },
      { token: 'else:', label: 'Fallback Clause', desc: 'Executes when preceding conditions evaluate to False.' }
    ],
    codeSnippet: `systolic_bp = 135\n\nif systolic_bp >= 140:\n    stage = "Stage 2 Hypertension"\nelif systolic_bp >= 130:\n    stage = "Stage 1 Hypertension"\nelse:\n    stage = "Normal BP"\n\nprint(stage)`,
    challenge: {
      instruction: 'Write an if-statement checking if glucose > 125, print "High".',
      starterCode: 'glucose = 140\n\n# Add your if condition below:\n',
      expectedKeyword: 'if',
      test: (code) => code.includes('if') && code.includes('glucose') && code.includes('125') && code.includes(':')
    }
  },
  {
    id: 'mod-3',
    title: '3. Functions & Parameters',
    badge: 'Core',
    summary: 'Package reusable logic and return computed clinical indicators.',
    terms: [
      { token: 'def', label: 'Function Definition', desc: 'Declares a reusable block of instructions.' },
      { token: 'calculate_bmi', label: 'Function Identifier', desc: 'The name used to call/invoke this operation.' },
      { token: '(weight, height)', label: 'Parameters', desc: 'Input variables passed into the function.' },
      { token: '**', label: 'Exponent Operator', desc: 'Power function (e.g., height ** 2 = height squared).' },
      { token: 'return', label: 'Return Statement', desc: 'Sends the final computed value back to the caller.' }
    ],
    codeSnippet: `def calculate_bmi(weight_kg, height_m):\n    bmi = weight_kg / (height_m ** 2)\n    return round(bmi, 2)\n\npatient_bmi = calculate_bmi(70, 1.75)\nprint(f"Calculated BMI: {patient_bmi}")`,
    challenge: {
      instruction: 'Define a function "double_dose(dose)" that returns dose * 2.',
      starterCode: '# Define double_dose function here:\n',
      expectedKeyword: 'def',
      test: (code) => code.includes('def double_dose') && code.includes('return') && code.includes('*')
    }
  },
  {
    id: 'mod-4',
    title: '4. Lists & Loops',
    badge: 'Data',
    summary: 'Batch process patient queues, lab values, and sensor arrays.',
    terms: [
      { token: '[ ... ]', label: 'List Container', desc: 'An ordered, mutable collection of elements.' },
      { token: 'for', label: 'Loop Constructor', desc: 'Iterates sequentially through each item in a collection.' },
      { token: 'in', label: 'Membership Operator', desc: 'Links the temporary element variable with the target sequence.' },
      { token: '.append()', label: 'List Method', desc: 'Inserts a new value onto the end of the existing list.' }
    ],
    codeSnippet: `lab_results = [98, 104, 110, 89, 120]\nelevated = []\n\nfor val in lab_results:\n    if val > 100:\n        elevated.append(val)\n\nprint(f"Elevated readings: {elevated}")`,
    challenge: {
      instruction: 'Write a for loop that iterates over "numbers" and prints each item.',
      starterCode: 'numbers = [1, 2, 3, 4]\n# Write your for loop:\n',
      expectedKeyword: 'for',
      test: (code) => code.includes('for') && code.includes('in numbers:') && code.includes('print')
    }
  },
  {
    id: 'mod-5',
    title: '5. Dictionaries & Data Structs',
    badge: 'Advanced',
    summary: 'Key-value mapping for electronic health records & API responses.',
    terms: [
      { token: '{ ... }', label: 'Dictionary', desc: 'Key-value map for fast lookup by descriptive keys.' },
      { token: '"id": 101', label: 'Key-Value Pair', desc: 'Maps identifier key to its associated value.' },
      { token: 'patient["age"]', label: 'Subscript Lookup', desc: 'Retrieves the specific data stored under key "age".' }
    ],
    codeSnippet: `patient_record = {\n    "mrn": "A8921",\n    "age": 34,\n    "vitals": {"hr": 78, "spo2": 99}\n}\n\nprint("Patient MRN:", patient_record["mrn"])\nprint("Oxygen Saturation:", patient_record["vitals"]["spo2"])`,
    challenge: {
      instruction: 'Create a dictionary named "drug" with keys "name" and "dose".',
      starterCode: '# Create drug dictionary:\n',
      expectedKeyword: 'drug',
      test: (code) => code.includes('drug') && code.includes('name') && code.includes('dose') && code.includes('{')
    }
  },
  {
    id: 'mod-6',
    title: '6. Pandas & Data Science Basics',
    badge: 'Specialized',
    summary: 'Inspect clinical trial tables and compute summary statistics.',
    terms: [
      { token: 'import pandas as pd', label: 'Library Import', desc: 'Imports data manipulation library with standard alias pd.' },
      { token: 'pd.DataFrame()', label: 'DataFrame Constructor', desc: 'Creates a 2D labeled tabular data structure.' },
      { token: '.describe()', label: 'Summary Statistics', desc: 'Calculates mean, std, min, and quartiles automatically.' }
    ],
    codeSnippet: `import pandas as pd\n\ndata = {\n    "subject_id": [1, 2, 3],\n    "arm": ["Placebo", "Active", "Active"],\n    "reduction_pct": [4.2, 18.5, 22.1]\n}\n\ndf = pd.DataFrame(data)\nprint(df.groupby("arm")["reduction_pct"].mean())`,
    challenge: {
      instruction: 'Call the .mean() method on a column named df["reduction_pct"].',
      starterCode: '# Write code to calculate mean:\n',
      expectedKeyword: 'mean',
      test: (code) => code.includes('df["reduction_pct"].mean()') || code.includes("df['reduction_pct'].mean()")
    }
  }
];

// --- DAILY DRILLS ---
const DRILLS = [
  {
    id: 'd1',
    type: 'spot_bug',
    question: 'Find the bug in this Python conditional statement:',
    code: 'age = 20\nif age >= 18\n    print("Eligible")',
    options: [
      'Missing colon (:) at end of if line',
      'Variable age should be string',
      'Indentation is incorrect',
      'Should use single equals (=)'
    ],
    correctIndex: 0,
    explanation: 'In Python, every if, elif, else, def, and for loop statement MUST terminate with a colon (:).'
  },
  {
    id: 'd2',
    type: 'predict_output',
    question: 'What is the output of this Python code snippet?',
    code: 'val = "5" + "5"\nprint(val)',
    options: ['10', '"55"', 'Error: Cannot add numbers', '5'],
    correctIndex: 1,
    explanation: 'Both values are enclosed in quotes ("5"), making them strings. The "+" operator concatenates text instead of performing arithmetic.'
  },
  {
    id: 'd3',
    type: 'spot_bug',
    question: 'Identify why this function returns None instead of the result:',
    code: 'def add_values(a, b):\n    total = a + b\n\nresult = add_values(5, 10)',
    options: [
      'Missing "return total" inside function',
      'Variables a and b need data type prefixes',
      'Cannot add integers inside functions',
      'Missing parenthesis on result'
    ],
    correctIndex: 0,
    explanation: 'Without an explicit "return" keyword, Python functions default to returning None when completed.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' | 'lab' | 'drills' | 'ai'
  const [selectedModule, setSelectedModule] = useState(MODULES[0]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  
  // Lab State
  const [userCode, setUserCode] = useState(MODULES[0].challenge.starterCode);
  const [labFeedback, setLabFeedback] = useState(null);
  const [executionOutput, setExecutionOutput] = useState('');

  // Daily Drills State
  const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [drillAnswered, setDrillAnswered] = useState(false);
  const [streakCount, setStreakCount] = useState(4);

  // AI Chat State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'tutor', text: 'Salam Osman! I am your PyMaster AI tutor. Pick any concept from variables to clinical data analysis, or paste your code here to review mistakes together.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Handle module switch
  const handleSelectModule = (mod) => {
    setSelectedModule(mod);
    setSelectedTerm(null);
    setUserCode(mod.challenge.starterCode);
    setLabFeedback(null);
    setExecutionOutput('');
  };

  // Quick insertion bar helper for mobile keyboards
  const insertSymbol = (sym) => {
    setUserCode((prev) => prev + sym);
  };

  // Smart mistake diagnostic engine
  const runCodeDiagnostic = () => {
    const code = userCode;
    let feedback = null;

    // Diagnostic Rule 1: Missing colon
    if ((code.includes('if ') || code.includes('for ') || code.includes('def ')) && !code.includes(':')) {
      feedback = {
        type: 'error',
        title: 'SyntaxError: Missing Colon (:) Detected',
        desc: 'In Python, control statements (if, for, while, def) must conclude with a colon ":" before you indent the block below.'
      };
    } 
    // Diagnostic Rule 2: Single equals comparison trap
    else if (code.match(/if\s+[a-zA-Z0-9_]+\s*=\s*[a-zA-Z0-9_]+/)) {
      feedback = {
        type: 'error',
        title: 'Assignment (=) used instead of Equality (==)',
        desc: 'A single "=" assigns values to variables. To test if two things are equal inside an if condition, always use "==".'
      };
    }
    // Diagnostic Rule 3: Function without return
    else if (code.includes('def ') && !code.includes('return') && selectedModule.id === 'mod-3') {
      feedback = {
        type: 'warning',
        title: 'Notice: No "return" keyword',
        desc: 'Your function computes a value, but without a "return" statement, it will output None to whoever calls it.'
      };
    }
    // Diagnostic Rule 4: Challenge Verification
    else if (selectedModule.challenge.test(code)) {
      feedback = {
        type: 'success',
        title: 'Outstanding Work! Challenge Passed',
        desc: 'Your logic satisfies all criteria. You demonstrated clean syntax and proper keyword usage.'
      };
      setExecutionOutput(`>>> Executing Python 3.12...\n[OK] Test assertions passed successfully.\nResult: 100% Validated.`);
    } else {
      feedback = {
        type: 'info',
        title: 'Keep Refining',
        desc: `Review the prompt requirement: "${selectedModule.challenge.instruction}". Make sure your variable or keyword names match.`
      };
      setExecutionOutput(`>>> Running checks...\nRequirement not yet fully met. Check syntax or variable names.`);
    }

    setLabFeedback(feedback);
  };

  // AI Chat submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    // Simulated responsive Socratic tutor response
    setTimeout(() => {
      let reply = "That's a thoughtful question! In Python, always verify two things: whether the data type matches what your operation expects, and whether indentation matches 4 spaces per block.";
      const lower = userText.toLowerCase();

      if (lower.includes('list') || lower.includes('dictionary') || lower.includes('dict')) {
        reply = "Lists [] preserve order and access by index numbers (like queue items). Dictionaries {} map unique keys to values (like patient MRN -> details). Which one best fits your current workflow?";
      } else if (lower.includes('error') || lower.includes('colon') || lower.includes('indent')) {
        reply = "When Python throws an IndentationError or SyntaxError, inspect the exact line indicated and the line directly above it. 90% of the time, a missing colon (:) or mixed tabs/spaces is the cause.";
      } else if (lower.includes('pandas') || lower.includes('dataframe')) {
        reply = "In Pandas, think of a DataFrame as an Excel sheet inside memory. You slice rows with .iloc[] or condition masks like df[df['age'] > 30]. Would you like a clinical dataset example?";
      }

      setChatMessages((prev) => [...prev, { sender: 'tutor', text: reply }]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-950 text-slate-100 overflow-hidden shadow-2xl border-x border-slate-800">
      
      {/* Top Header */}
      <header className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Code2 size={18} />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              PyMaster <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-1.5 py-0.5 rounded">TUTOR</span>
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-xs">
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-1 rounded-full font-medium">
            <Flame size={14} className="fill-amber-400" />
            <span>{streakCount} Day Streak</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-16">
        
        {/* ================= TAB 1: LEARN (LECTURES & CODE X-RAY) ================= */}
        {activeTab === 'learn' && (
          <div className="p-4 space-y-4">
            
            {/* Module Picker Strip */}
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {MODULES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSelectModule(m)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                    selectedModule.id === m.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-950'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>

            {/* Lecture Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {selectedModule.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Sparkles size={12} className="text-emerald-400" /> Interactive Lesson
                </span>
              </div>
              <h2 className="text-lg font-bold text-white">{selectedModule.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedModule.summary}</p>
            </div>

            {/* Code Term X-Ray Inspector */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Search size={14} className="text-emerald-400" /> Code Term X-Ray
                </h3>
                <span className="text-[11px] text-slate-400">Tap a token to inspect</span>
              </div>

              {/* Clickable Token Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedModule.terms.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTerm(term)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                      selectedTerm?.token === term.token
                        ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 scale-105'
                        : 'bg-slate-800/80 border-slate-700 text-emerald-300 hover:border-slate-600'
                    }`}
                  >
                    {term.token}
                  </button>
                ))}
              </div>

              {/* Term Explanation Box */}
              {selectedTerm ? (
                <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-1 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">{selectedTerm.label}</span>
                    <span className="text-[10px] text-slate-500 font-mono">Token: {selectedTerm.token}</span>
                  </div>
                  <p className="text-xs text-slate-300">{selectedTerm.desc}</p>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-2">
                  <Info size={14} className="text-slate-400 shrink-0" />
                  Select any keyword above to view its technical syntax and role in code.
                </div>
              )}
            </div>

            {/* Code Lecture Block */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800">
                <span className="font-mono text-[11px]">sample_program.py</span>
                <span className="text-[10px] text-emerald-400 font-medium">Ready to run</span>
              </div>
              <pre className="font-mono text-xs text-slate-200 leading-5 overflow-x-auto p-1">
                <code>{selectedModule.codeSnippet}</code>
              </pre>
            </div>

            {/* Jump to Practice Lab Button */}
            <button
              onClick={() => setActiveTab('lab')}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-emerald-950"
            >
              <Code2 size={16} /> Open Interactive Practice Lab
            </button>
          </div>
        )}

        {/* ================= TAB 2: CODE LAB (PRACTICE & DIAGNOSTICS) ================= */}
        {activeTab === 'lab' && (
          <div className="p-4 space-y-3">
            {/* Challenge Prompt */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Target Challenge • {selectedModule.title}
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {selectedModule.challenge.instruction}
              </p>
            </div>

            {/* Mobile Symbol Helper Bar */}
            <div className="flex items-center space-x-1.5 overflow-x-auto py-1 scrollbar-none">
              <span className="text-[10px] text-slate-400 uppercase font-semibold px-1">Keys:</span>
              {[':', '    ', '==', '=', '(', ')', '[', ']', '"', 'def ', 'return ', 'print('].map((sym, i) => (
                <button
                  key={i}
                  onClick={() => insertSymbol(sym)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono text-xs border border-slate-700 active:bg-emerald-500 active:text-slate-950 shrink-0"
                >
                  {sym === '    ' ? 'Indent' : sym}
                </button>
              ))}
            </div>

            {/* Interactive Code Editor */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3 focus-within:border-emerald-500/60 transition-colors">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <span className="text-[11px] text-slate-400 font-mono">practice_workspace.py</span>
                <button
                  onClick={() => setUserCode(selectedModule.challenge.starterCode)}
                  className="text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                rows={8}
                spellCheck="false"
                className="w-full bg-transparent text-emerald-300 font-mono text-xs focus:outline-none resize-none leading-relaxed code-font"
                placeholder="# Write your Python code here..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={runCodeDiagnostic}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-emerald-950"
              >
                <Play size={15} className="fill-slate-950" /> Test & Diagnose Code
              </button>
            </div>

            {/* Diagnostics & Error Correction Card */}
            {labFeedback && (
              <div className={`p-3.5 rounded-2xl border text-xs space-y-1.5 animate-fadeIn ${
                labFeedback.type === 'error'
                  ? 'bg-rose-950/30 border-rose-600/40 text-rose-200'
                  : labFeedback.type === 'warning'
                  ? 'bg-amber-950/30 border-amber-600/40 text-amber-200'
                  : labFeedback.type === 'success'
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                  : 'bg-slate-900 border-slate-700 text-slate-200'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  {labFeedback.type === 'error' && <AlertTriangle size={16} className="text-rose-400 shrink-0" />}
                  {labFeedback.type === 'warning' && <AlertTriangle size={16} className="text-amber-400 shrink-0" />}
                  {labFeedback.type === 'success' && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                  {labFeedback.type === 'info' && <Lightbulb size={16} className="text-blue-400 shrink-0" />}
                  <span>{labFeedback.title}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300 pl-6">
                  {labFeedback.desc}
                </p>
              </div>
            )}

            {/* Virtual Console */}
            {executionOutput && (
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-[11px] text-slate-300 whitespace-pre-wrap">
                {executionOutput}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: DAILY DRILLS (HABIT BUILDER) ================= */}
        {activeTab === 'drills' && (
          <div className="p-4 space-y-4">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-amber-300">Daily 5-Minute Drill</h2>
                <p className="text-[11px] text-slate-400">Regular training sharpens error-spotting reflexes.</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-amber-400 font-bold">
                  {currentDrillIndex + 1} / {DRILLS.length}
                </span>
              </div>
            </div>

            {/* Drill Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {DRILLS[currentDrillIndex].type === 'spot_bug' ? 'Spot The Bug' : 'Predict The Output'}
              </span>
              <p className="text-xs font-medium text-slate-200">
                {DRILLS[currentDrillIndex].question}
              </p>

              {/* Code Snippet Box */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed">
                <pre>{DRILLS[currentDrillIndex].code}</pre>
              </div>

              {/* Options */}
              <div className="space-y-2 pt-2">
                {DRILLS[currentDrillIndex].options.map((opt, idx) => {
                  let btnStyle = 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600';
                  
                  if (drillAnswered) {
                    if (idx === DRILLS[currentDrillIndex].correctIndex) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-medium';
                    } else if (idx === selectedOption) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={drillAnswered}
                      onClick={() => {
                        setSelectedOption(idx);
                        setDrillAnswered(true);
                        if (idx === DRILLS[currentDrillIndex].correctIndex) {
                          setStreakCount((s) => s + 1);
                        }
                      }}
                      className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {drillAnswered && idx === DRILLS[currentDrillIndex].correctIndex && (
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon answering */}
              {drillAnswered && (
                <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <Lightbulb size={14} /> Master Explanation
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {DRILLS[currentDrillIndex].explanation}
                  </p>
                  
                  {currentDrillIndex < DRILLS.length - 1 && (
                    <button
                      onClick={() => {
                        setCurrentDrillIndex((i) => i + 1);
                        setSelectedOption(null);
                        setDrillAnswered(false);
                      }}
                      className="mt-2 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium flex items-center justify-center gap-1"
                    >
                      Next Drill <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 4: SOCRATIC AI TUTOR ================= */}
        {activeTab === 'ai' && (
          <div className="flex flex-col h-full p-4">
            <div className="flex-1 space-y-3 overflow-y-auto pb-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.sender === 'tutor' && (
                      <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold mb-1">
                        <Bot size={12} /> Master Tutor
                      </div>
                    )}
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form onSubmit={handleSendMessage} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Python questions or paste errors..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Bottom Navigation Bar (Android Touch Optimized) */}
      <nav className="bg-slate-900/95 border-t border-slate-800 px-2 py-2 flex justify-around items-center backdrop-blur-md fixed bottom-0 left-0 right-0 max-w-md mx-auto z-20">
        <button
          onClick={() => setActiveTab('learn')}
          className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'learn' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen size={18} className="mb-0.5" />
          <span>Learn</span>
        </button>

        <button
          onClick={() => setActiveTab('lab')}
          className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'lab' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 size={18} className="mb-0.5" />
          <span>Code Lab</span>
        </button>

        <button
          onClick={() => setActiveTab('drills')}
          className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'drills' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Zap size={18} className="mb-0.5" />
          <span>Daily Drill</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors ${
            activeTab === 'ai' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Bot size={18} className="mb-0.5" />
          <span>AI Tutor</span>
        </button>
      </nav>
    </div>
  );
}

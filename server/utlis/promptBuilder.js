export const buildPrompt = ({
    topic,
    classLevel,
    examType,
    revisionMode,
    includeDiagram,
    includeChart

}) => {
    return `
    You are a STRICT JSON generator for an exam preparation system.

    VERY IMPORTANT:
    - Output MUST be valid JSON
    -Your response will be parsed using JSON.parse()
    - INVALID JSON will cause system failure
    - Use ONLY double qoures "
    - NO comments, NO trailing commas
    - Escape line breaks using \\n
    - Do NOT use emojis inside text valus

    TASK:
    Convert the given topic into exam-focused notes.

    INPUT:
    Topic:${topic}
    Class Level:${classLevel || "Not specified"}
    Exam Type: ${examType || "General"}
    Revision Mode  : ${revisionMode ? "ON" : "OFF"}
    Include Diagram :${includeDiagram ? "YES" : "NO"}
    Include Charts : ${includeChart ? "YES" : "NO"}

    GLOBAL CONTENT RULES:
    - Use clear, simple, exam-oriented language
    - Notes MUST be Markdown formatted
    - Headings and bullets points only

    REVISION MODE RULES(CRITICAL):
    - If REVISION MODE is ON :
     - Notes must be VERY SHORT
     - Only bullet points 
     - One-line answers only
     - Definitions, formulas, keywords
     - No paragraphs
     - No explanations
     - Content must feel like:
       - last-day revision
       - 5-minute exam cheat sheet
     - revisionPoints MUST summarize ALL important facts
    - If REVISION MODE is OFF:
     - Notes must be DETAILED but exam-focused
     - Eact topic should include:
       - definition
       - short explanation
       - example(if applicable)
     - Paragraph lenght: max 4-5 lines
     - No storytelling, no extra theory
    
    IMPORTANT RULES:
    - Divide sub-topics into THREE categories:
      - Very Important Topic
      - Important Topic
      - Frequently Asked Topic
    - All three categories MUST be present
    - Base important on exam frequency and weightage  

    DIAGRAM RULES:
    - If INCLUDED DIAGRAM is YES:
      - diagram.data MUST be a SINGLE STRING
      - Valid Mermaid 
      - Must start with: graph ID
      - Wrap EVERY node lable in square barckets [ ]\
      - Do NOT use special characters inside labels
    - If INCLUDE DIAGRAM is NO:
      - digram.data MUST be ""

    CHART RULES (RECHARTS):
     - If INCLUDED CHARTS is YES:
       - charts array MUST NOT be empty
       - Generate at least ONE chart
       - Choose chart based on topic type:
         - THEORY topic -> bar or pie (important / weightage)
         - PROCESS topic -> bar or line (steps / stages)
       - Use numeric values ONLY
       - Labels must be short and exam-oriented
     - If INCLUDED CHARTS is NO:
       - charts MUST be [] 
    
    CHART TYPES ALLOWED:
    - bar
    - line
    - pie

    CHART OBJECT FORMAT:
    {
        "type" : bar" | line" | pie",
        "title" : "string",
        "data" : [
        {"name": "string", "value":10}]
    }

    STRICT JSON FORMAT (DO NOT CHANGE):
    {
        "subTopics":{
        "⭐":[],
        "⭐⭐":[],
        "⭐⭐⭐":[]
        },
        "important": "⭐| ⭐⭐ | ⭐⭐⭐ ",
        "notes" : "string",
        "revisionPoints" : [],
        "questions":{
            "short":[],
            "long":[],
            "diagram":""

        },
        "diagram":{
        "type": "flowchart | graph | process",
        "data": " "
        },
        "charts":[]
     }
    `

}
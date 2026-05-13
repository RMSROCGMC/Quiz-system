// 電磁學必考公式測驗資料 (來源：手寫筆記)
const physicsQuiz = [
  {
    "question": "電流 $I = ？$",
    "options": ["$I = \\frac{Q}{t}$", "$I = Q \\times t$", "$I = \\frac{t}{Q}$", "$I = \\frac{V}{Q}$"],
    "answer": 0,
    "rationale": "電流定義為單位時間內的電荷量。"
  },
  {
    "question": "庫侖定律 $F = ？$",
    "options": ["$F = \\frac{kQq}{r}$", "$F = \\frac{kQq}{r^2}$", "$F = kQq \\cdot r^2$", "$F = \\frac{F}{q}$"],
    "answer": 1,
    "rationale": "靜電力與電荷乘積成正比，與距離平方成反比。"
  },
  {
    "question": "歐姆定律 $R = ？$",
    "options": ["$R = V \\times I$", "$R = \\frac{I}{V}$", "$R = \\frac{V}{I}$", "$R = \\frac{W}{t}$"],
    "answer": 2,
    "rationale": "電阻等於電壓除以電流。"
  },
  {
    "question": "電阻定律 $R = ？$",
    "options": ["$R = \\rho \\cdot \\frac{A}{L}$", "$R = \\rho \\cdot \\frac{L}{A}$", "$R = \\frac{V}{I}$", "$R = \\frac{Q}{V}$"],
    "answer": 1,
    "rationale": "電阻與長度成正比，與截面積成反比。"
  },
  {
    "question": "電場 $E = ？$",
    "options": ["$E = \\frac{F}{q}$", "$E = F \\times q$", "$E = \\frac{V}{q}$", "$E = \\frac{U}{q}$"],
    "answer": 0,
    "rationale": "電場定義為單位電荷受到的力。"
  },
  {
    "question": "電功率 $P = ？$ (基本定義)",
    "options": ["$P = \\frac{t}{W}$", "$P = \\frac{W}{t}$", "$P = W \\times t$", "$P = IV^2$"],
    "answer": 1,
    "rationale": "功率為單位時間內所做的功。"
  },
  {
    "question": "平行板電場 $E = ？$",
    "options": ["$E = \\frac{d}{V}$", "$E = V \\times d$", "$E = \\frac{V}{d}$", "$E = \\frac{Q}{V}$"],
    "answer": 2,
    "rationale": "平行板間電場與電位差成正比，與距離成反比。"
  },
  {
    "question": "電位 $V = ？$",
    "options": ["$V = \\frac{q}{U}$", "$V = \\frac{U}{q}$", "$V = U \\times q$", "$V = \\frac{F}{q}$"],
    "answer": 1,
    "rationale": "電位定義為單位電荷擁有的電位能。"
  },
  {
    "question": "電容 $C = ？$",
    "options": ["$C = \\frac{V}{Q}$", "$C = Q \\times V$ ", "$C = \\frac{Q}{V}$", "$C = \\frac{I}{V}$"],
    "answer": 2,
    "rationale": "電容定義為單位電壓所儲存的電量。"
  },
  {
    "question": "載流導線所受磁力 $F = ？$",
    "options": ["$F = ILB \\cos\\theta$", "$F = \\frac{ILB}{\\sin\\theta}$", "$F = ILB \\sin\\theta$", "$F = qvB \\sin\\theta$"],
    "answer": 2,
    "rationale": "載流導線在磁場受力公式，與角度正弦值成正比。"
  }
];

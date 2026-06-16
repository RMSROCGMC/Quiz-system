// 擴充章節：基本電學（Ⅱ）第十章 交流電路功率核心評量
window.currentQuiz = {
    name: "基本電學：第十章 交流電路功率核心模擬測驗",
    mode: 4,
    time: 30,
    data: [
        { 
            q: "在交流電路功率計算中，若已知電壓與電流之有效值分別為 $V$ 與 $I$，且兩者相位角差為 $\theta$，則平均功率（實功率） $P$ 的計算公式為何？", 
            o: [String.raw`(A) $P = VI$`, String.raw`(B) $P = VI \cos\theta$`, String.raw`(C) $P = VI \sin\theta$`, String.raw`(D) $P = I^2 X_L$`], 
            a: "B" 
        },
        { 
            q: "關於交流電路之無功功率（虛功率） $Q$ 的基本運算式，且其計量單位為乏爾（VAR），下列公式何者正確？", 
            o: [String.raw`(A) $Q = VI \cos\theta$`, String.raw`(B) $Q = VI$`, String.raw`(C) $Q = VI \sin\theta$`, String.raw`(D) $Q = \frac{V}{I}$`], 
            a: "C" 
        },
        { 
            q: "在純電阻交流電路中，已知外接電壓有效值為 $V$，電流有效值為 $I$，其瞬時功率軌跡的最大瞬時功率 $P_{\max}$ 計算公式為何？", 
            o: [String.raw`(A) $P_{\max} = VI$`, String.raw`(B) $P_{\max} = 2VI$`, String.raw`(C) $P_{\max} = \sqrt{2}VI$`, String.raw`(D) $P_{\max} = 0$`], 
            a: "B" 
        },
        { 
            q: "承上題，在純電阻交流電路中，其瞬時功率軌跡的最小瞬時功率 $P_{\min}$ 計算公式為何？", 
            o: [String.raw`(A) $P_{\min} = -VI$`, String.raw`(B) $P_{\min} = 0$`, String.raw`(C) $P_{\min} = VI$`, String.raw`(D) $P_{\min} = -2VI$`], 
            a: "B" 
        },
        { 
            q: "若電源基頻頻率為 $f$（角頻率為 $\omega$），則交流電路中「功率波動」的頻率 $f_p$ 與基頻的關係為何？", 
            o: [String.raw`(A) $f_p = f$`, String.raw`(B) $f_p = \frac{1}{2}f$`, String.raw`(C) $f_p = 2f$`, String.raw`(D) $f_p = 4f$`], 
            a: "C" 
        },
        { 
            q: "單相交流電路之視在功率 $S$ 定義為電壓與電流有效值純量之乘積，其基本定義公式及單位為何？", 
            o: [String.raw`(A) $S = VI \text{ (W)}$`, String.raw`(B) $S = VI \text{ (VA)}$`, String.raw`(C) $S = VI \sin\theta \text{ (VAR)}$`, String.raw`(D) $S = \sqrt{P^2 - Q^2} \text{ (VA)}$`], 
            a: "B" 
        },
        { 
            q: "根據直角功率三角形的幾何關係（畢氏定理），視在功率 $S$、平均功率 $P$ 與虛功率 $Q$ 的數學關係式為何？", 
            o: [String.raw`(A) $S = P + Q$`, String.raw`(B) $S = \sqrt{P^2 + Q^2}$`, String.raw`(C) $S = \sqrt{P^2 - Q^2}$`, String.raw`(D) $P = \sqrt{S^2 + Q^2}$`], 
            a: "B" 
        },
        { 
            q: "純電容交流電路中，已知容抗為 $X_C$，電壓有效值為 $V$，電流有效值為 $I$，則該電路所表現的電容性無功功率 $Q_C$ 公式為何？", 
            o: [String.raw`(A) $Q_C = 0$`, String.raw`(B) $Q_C = VI \cos(-90^{\circ})$`, String.raw`(C) $Q_C = -VI = -I^2 X_C$`, String.raw`(D) $Q_C = VI = I^2 X_C$`], 
            a: "C" 
        },
        { 
            q: "交流電路的功率因數 $PF$ 定義為實功率與視在功率之比值，其對應的三角函數運算式為何？", 
            o: [String.raw`(A) $PF = \frac{P}{S} = \cos\theta$`, String.raw`(B) $PF = \frac{Q}{S} = \sin\theta$`, String.raw`(C) $PF = \frac{P}{Q} = \tan\theta$`, String.raw`(D) $PF = \frac{S}{P} = \sec\theta$`], 
            a: "A" 
        },
        { 
            q: "當相同的電阻 $R$ 與感抗 $X_L$ 由串聯架構改為並聯架構時，其串聯功率因數 $PF_s$ 與並聯功率因數 $PF_p$ 之間符合哪一個終極邊界定理（恆等式）？", 
            o: [String.raw`(A) $PF_s + PF_p = 1$`, String.raw`(B) $PF_s^2 - PF_p^2 = 1$`, String.raw`(C) $PF_s \times PF_p = 1$`, String.raw`(D) $PF_s^2 + PF_p^2 = 1$`], 
            a: "D" 
        }
    ]
};
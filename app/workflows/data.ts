export interface WorkflowStep {
  name: string;
  desc: string;
}

export interface Workflow {
  slug: string;
  name: string;
  desc: string;
  fullDesc: string;
  nodes: number;
  complexity: "intermediate" | "advanced";
  isFree: boolean;
  tools: string[];
  learns: string[];
  steps: WorkflowStep[];
}

export const workflows: Workflow[] = [
  {
    slug: "owl-ai",
    name: "OwlAI",
    desc: "מערכת ידע אישית. שומרים תוכן מהאינטרנט, AI מנתח אותו, והכל נשמר ב-Notion.",
    fullDesc: "OwlAI הוא knowledge base אישי שעובד עם תוסף דפדפן. שומרים מאמר, סרטון, או PDF, והמערכת מנתחת את התוכן עם AI, מחלצת נקודות מפתח, מסווגת לפי נושא, ושומרת הכל מאורגן ב-Notion. הכל אוטומטי.",
    nodes: 8,
    complexity: "intermediate",
    isFree: true,
    tools: ["Webhook", "OpenAI", "Notion"],
    learns: ["עבודה עם Webhooks", "פלט מובנה מ-AI (structured output)", "חיבור ל-Notion API", "עיבוד תוכן עם שני מודלים שונים"],
    steps: [
      { name: "Webhook", desc: "מקבל תוכן מתוסף הדפדפן - URL, כותרת, קטע, תגיות" },
      { name: "AI Analysis", desc: "GPT-4o-mini מנתח את התוכן, מחלץ סיכום, נקודות מפתח, קטגוריה, ונושאים" },
      { name: "JSON Parser", desc: "GPT-4o מוודא שהפלט בפורמט JSON תקין ומוכן לשמירה" },
      { name: "Save to Notion", desc: "שומר את התוכן המנותח ב-Notion עם כל המטא-דאטה" },
    ],
  },
  {
    slug: "guardian-ai",
    name: "Guardian AI",
    desc: "מערכת ניטור הודעות. מעבדת מיילים והודעות קוליות, מנתחת סנטימנט, ומתריעה על תוכן דחוף.",
    fullDesc: "Guardian AI מנטרת הודעות נכנסות ומנתחת אותן אוטומטית. המערכת מזהה הודעות טקסט והודעות קוליות, מתמללת אודיו, מנתחת את הסנטימנט והדחיפות, ושולחת התראה כשמשהו דורש תשומת לב.",
    nodes: 17,
    complexity: "intermediate",
    isFree: true,
    tools: ["Webhook", "Gmail", "OpenAI"],
    learns: ["תמלול אודיו עם AI", "לוגיקת branching (Switch nodes)", "ניתוח סנטימנט", "עבודה עם היסטוריית שיחות"],
    steps: [
      { name: "Webhook", desc: "מקבל הודעה נכנסת (מייל או הודעה קולית)" },
      { name: "Switch", desc: "מזהה את סוג ההודעה - טקסט או אודיו" },
      { name: "Audio Processing", desc: "אם אודיו: מוריד את הקובץ ומתמלל עם OpenAI" },
      { name: "Aggregate", desc: "אוסף את כל ההודעות יחד" },
      { name: "Get History", desc: "מושך היסטוריית שיחות לקונטקסט" },
      { name: "AI Analysis", desc: "מנתח סנטימנט, דחיפות, ותוכן" },
      { name: "Notify", desc: "אם ההודעה דחופה - שולח התראה במייל" },
    ],
  },
  {
    slug: "catchup-ai",
    name: "CatchUpAI",
    desc: "ניוזלטר יומי אישי. אוסף מ-8 מקורות RSS, AI מסכם, ושולח לטלגרם.",
    fullDesc: "CatchUpAI אוסף חדשות מ-8 מקורות RSS שונים - ניוזלטרים, חדשות AI, טוויטר, ועוד. המערכת מריצה שני AI agents במקביל (Claude ו-GPT) כדי לסכם את הכל, ושולחת דייג'סט יומי מסודר לטלגרם.",
    nodes: 26,
    complexity: "advanced",
    isFree: false,
    tools: ["RSS", "OpenAI", "Anthropic", "Telegram"],
    learns: ["עבודה עם RSS feeds", "עיבוד מקבילי (parallel processing)", "שימוש בשני מודלים במקביל", "שליחת הודעות לטלגרם"],
    steps: [
      { name: "Schedule Trigger", desc: "רץ אוטומטית כל יום" },
      { name: "8 RSS Feeds", desc: "מושך תוכן מ-8 מקורות במקביל - AI newsletters, חדשות, טוויטר" },
      { name: "Strip HTML", desc: "מנקה את ה-HTML ומחלץ טקסט נקי" },
      { name: "Merge", desc: "מאחד את כל הפידים לזרם אחד" },
      { name: "Dual AI Agents", desc: "Claude מסכם חלק, GPT מסכם חלק - במקביל" },
      { name: "Combine", desc: "מאחד את שני הסיכומים לדייג'סט אחד" },
      { name: "Send to Telegram", desc: "שולח את הסיכום היומי לטלגרם" },
    ],
  },
  {
    slug: "inbox-ninja",
    name: "InboxNinja",
    desc: "מנהל מיילים חכם. מסווג מיילים ל-6 קטגוריות, מעבד ניוזלטרים וקבלות, שולח סיכום שבועי.",
    fullDesc: "InboxNinja הוא מערכת ניהול מיילים מלאה. כל מייל שנכנס מסווג אוטומטית לאחת מ-6 קטגוריות. ניוזלטרים מקבלים סיכום AI. קבלות עוברות OCR וניתוח. בסוף השבוע מגיע סיכום שבועי מקיף.",
    nodes: 31,
    complexity: "advanced",
    isFree: false,
    tools: ["Gmail", "Google Sheets", "Google Drive", "OpenAI"],
    learns: ["סיווג מיילים עם AI", "ניתוב multi-branch", "עיבוד קבלות (OCR)", "דוחות מתוזמנים"],
    steps: [
      { name: "Gmail Trigger", desc: "מופעל אוטומטית על כל מייל חדש" },
      { name: "AI Classifier", desc: "מסווג את המייל לקטגוריה - Promotions, Personal, Receipts, Newsletters, Business, Other" },
      { name: "Route", desc: "מנתב לפי הקטגוריה - כל קטגוריה מקבלת טיפול שונה" },
      { name: "Newsletter Processing", desc: "מחלץ תוכן מניוזלטרים ומעשיר עם AI" },
      { name: "Receipt Processing", desc: "מזהה קבלות, מחלץ סכומים ופרטים, שומר ב-Drive" },
      { name: "Store in Sheets", desc: "שומר את כל המיילים המסווגים ב-Google Sheets" },
      { name: "Weekly Summary", desc: "כל שבוע - מריץ סיכום AI מקיף ושולח במייל" },
    ],
  },
  {
    slug: "auto-bloga",
    name: "AutoBloga",
    desc: "בלוג אוטומטי. מוצא חדשות AI טרנדיות, כותב פוסט SEO, מפרסם עם תמונה.",
    fullDesc: "AutoBloga מייצר פוסט בלוג אחד ביום, אוטומטית. המערכת מחפשת חדשות AI טרנדיות, בוחרת נושא, חוקרת אותו, כותבת פוסט מלא עם SEO, ממצאת תמונה מתאימה, ומפרסמת. multi-agent pipeline מלא.",
    nodes: 23,
    complexity: "advanced",
    isFree: false,
    tools: ["SerpAPI", "OpenAI", "Google Sheets"],
    learns: ["Multi-agent pipelines", "חיפוש וגרידה מהאינטרנט", "יצירת תוכן עם AI", "אופטימיזציית SEO"],
    steps: [
      { name: "Schedule Trigger", desc: "רץ כל יום בשעה 9 בבוקר" },
      { name: "Get Past Posts", desc: "בודק מה כבר פורסם כדי לא לחזור על נושאים" },
      { name: "Search News", desc: "מחפש חדשות AI טרנדיות ב-Google News" },
      { name: "Topic Picker", desc: "AI agent בוחר את הנושא הכי מעניין ורלוונטי" },
      { name: "Web Research", desc: "חוקר את הנושא לעומק מכמה מקורות" },
      { name: "Content Writer", desc: "AI כותב פוסט מלא - כותרת, גוף, מטא" },
      { name: "Optimizer", desc: "AI נוסף מטייב את הפורמט, קריאות, ו-SEO" },
      { name: "Find Image", desc: "מחפש תמונה מתאימה ב-Google Images" },
      { name: "Publish", desc: "מפרסם את הפוסט המוכן עם כל המטא-דאטה" },
    ],
  },
  {
    slug: "short-factory",
    name: "ShortFactory",
    desc: "מפעל סרטונים קצרים. מייצר רעיון, כותב תסריט, יוצר וידאו, ומעלה ליוטיוב.",
    fullDesc: "ShortFactory מייצר YouTube Shorts אוטומטית. המערכת קוראת brand brief, מייצרת רעיון לסרטון שלא חוזר על עצמו, כותבת תסריט, שולחת ל-API של יצירת וידאו, ממתינה שיהיה מוכן, ומעלה ישירות ליוטיוב.",
    nodes: 22,
    complexity: "advanced",
    isFree: false,
    tools: ["Anthropic", "Google Docs", "Google Sheets", "YouTube API"],
    learns: ["API polling patterns", "אוטומציית וידאו", "יצירת תוכן brand-consistent", "העלאה ליוטיוב"],
    steps: [
      { name: "Schedule Trigger", desc: "רץ אוטומטית כל יום" },
      { name: "Read Brand Brief", desc: "קורא את ה-brand brief מ-Google Docs" },
      { name: "Idea Generator", desc: "Claude מייצר רעיון לסרטון, בודק שלא חוזר על רעיונות קודמים" },
      { name: "Save Idea", desc: "שומר את הרעיון ב-Google Sheets למעקב" },
      { name: "Script Writer", desc: "Claude כותב תסריט מלא לסרטון" },
      { name: "Video API", desc: "שולח את התסריט ל-API של יצירת וידאו" },
      { name: "Wait & Poll", desc: "ממתין 100 שניות ובודק אם הסרטון מוכן" },
      { name: "Upload to YouTube", desc: "מוריד את הסרטון ומעלה ישירות ליוטיוב" },
    ],
  },
  {
    slug: "linkedin-rag",
    name: "LinkedIn RAG Agent",
    desc: "ניתוח פוסטים בלינקדאין עם RAG. Vector database, זיכרון שיחה, והמלצות חכמות.",
    fullDesc: "LinkedIn RAG Agent מנהל knowledge base של פוסטים מלינקדאין עם vector database. אפשר לשאול אותו שאלות על ביצועי פוסטים, לקבל המלצות, ולנתח דפוסים. המערכת כוללת זיכרון שיחה ושני AI models.",
    nodes: 24,
    complexity: "advanced",
    isFree: false,
    tools: ["OpenAI", "Anthropic", "Supabase", "Google Drive", "Postgres"],
    learns: ["ארכיטקטורת RAG", "Vector embeddings", "זיכרון שיחה (conversation memory)", "עבודה עם Supabase vectors"],
    steps: [
      { name: "Chat Trigger", desc: "מקבל שאלה מהמשתמש דרך ממשק צ'אט" },
      { name: "RAG Agent", desc: "agent שמחפש מידע רלוונטי ב-vector store" },
      { name: "Vector Search", desc: "מחפש פוסטים דומים ב-Supabase vector database" },
      { name: "Memory Query", desc: "בודק היסטוריית שיחה ב-Postgres" },
      { name: "LLM Response", desc: "מגיב עם תשובה מבוססת על כל הקונטקסט" },
      { name: "--- Pipeline B ---", desc: "צינור נפרד לעדכון ה-knowledge base" },
      { name: "File Trigger", desc: "מזהה קובץ חדש/מעודכן ב-Google Drive" },
      { name: "Split & Embed", desc: "מחלק את הטקסט לחתיכות ויוצר embeddings" },
      { name: "Store Vectors", desc: "שומר את ה-vectors ב-Supabase לחיפוש עתידי" },
    ],
  },
];

export function getWorkflow(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

// ─────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────
const i18n = {
  tr: {
    pageTitle: "Bütçe Takip", pageSubtitle: "Gelir ve giderlerini akıllıca yönet",
    sbLabelUsers: "Kullanıcılar", sbLabelAdd: "Yeni Kullanıcı", sbLabelEdit: "Aktif Kullanıcıyı Düzenle",
    sbAddUserBtn: "+ Kullanıcı Ekle", sbRenameBtn: "✏️ İsmi Güncelle", sbDeleteBtn: "🗑️ Kullanıcıyı Sil",
    settingsTitle: "Ayarlar", settingsBtn: "⚙️ Ayarlar",
    labelAppearance: "Görünüm & Dil", labelTheme: "Tema", labelLang: "Dil",
    labelExport: "Dışa Aktar", labelImport: "Yedek Yükle", importBtn: "⬆️ JSON İçe Aktar",
    lNetBalance: "Net Bakiye", lIncome: "Aylık Gelir", lExpense: "Aylık Gider", lSavingRate: "Tasarruf Oranı",
    lTopCat: "En Çok Harcanan", lDailyAvg: "Günlük Ortalama", lBestDay: "En Yüksek Harcama Günü",
    lBudgetGoal: "📎 Aylık Bütçe Hedefi", saveGoalBtn: "Kaydet",
    lGoalPct: "Kullanım", lGoalRemaining: "Kalan", lGoalStatus: "Durum",
    lDailyChart: "Günlük Gider", lCompareChart: "Ay Karşılaştırma", lYearlyChart: "Yıllık Özet",
    lFormTitle: "Yeni İşlem",
    lDesc: "Açıklama", lTags: "Etiketler", lAmount: "Tutar (₺)", lDate: "Tarih", lCat: "Kategori",
    lCatMgr: "Kategori Yönetimi", addCatBtn: "+",
    lInstall: "📅 Taksitli harcama", lInstallCount: "Taksit sayısı", lInstallHint: "Tutar aylara eşit bölünür.",
    lRecurring: "🔁 Tekrarlayan işlem", lRecurPeriod: "Tekrar Sıklığı", lRecurEnd: "Bitiş Tarihi",
    rOptMonthly: "Her Ay", rOptWeekly: "Her Hafta", rOptYearly: "Her Yıl",
    saveTxBtn: "💾 Kaydet", updateTxBtn: "✔ Güncelle", cancelTxBtn: "✖ İptal",
    lCatAnalysis: "Kategori Analizi", lTxHistory: "İşlem Geçmişi",
    fOptAll: "Tümü", fOptIncome: "Gelir", fOptExpense: "Gider",
    allCats: "Tüm Kategoriler",
    expBtnTxt: "💸 Gider", incBtnTxt: "💰 Gelir",
    // messages
    enterName: "İsim gir.", userExists: "Bu isim zaten var.", enterNewName: "Yeni isim gir.",
    otherUserExists: "Başka kullanıcıda bu isim var.", lastUser: "Son kullanıcı silinemez.",
    deleteUserConfirm: "kullanıcısını ve tüm işlemlerini silmek istiyor musun?",
    enterCat: "Kategori adı gir.", catExists: "Bu kategori zaten var.", catInUse: "Kategori kullanımda.",
    deleteCatConfirm: "kategorisini silmek istiyor musun?",
    addCatFirst: "Önce kategori ekle.", fillFields: "Tüm alanları doldur.",
    deleteTxConfirm: "Bu işlemi silmek istiyor musun?",
    recordText: "kayıt", noTransMonth: "Bu ay henüz işlem yok.",
    noTransFilter: "Filtreye uygun kayıt yok.", noCatYet: "Kategori yok.",
    savedOk: "Kaydedildi ✓", updatedOk: "Güncellendi ✓", deletedOk: "Silindi ✓",
    addedOk: "Eklendi ✓", importedOk: "İçe aktarıldı ✓", exportedOk: "Dışa aktarıldı ✓",
    invalidFile: "Geçersiz dosya.", overwriteConfirm: "Mevcut veriler silinecek. Devam?",
    emptyExport: "Dışa aktarılacak veri yok.",
    noData: "Veri yok", savingLeft: "tasarruf",
    compareUp: "↑ gider arttı", compareDown: "↓ gider azaldı", compareSame: "geçen ayla aynı",
    budgetGoalSet: "Hedef güncellendi ✓", budgetGoalEmpty: "Hedef tutarı gir.",
    budgetStatusOk: "✅ Hedefte", budgetStatusWarn: "⚠️ %80'e ulaştı", budgetStatusOver: "🚨 Aşıldı",
    goalNotSet: "Hedef belirlenmedi", goalHint: "Hedef tutarı gir...",
    limitWarn: "bütçenizin %80'ine ulaştınız!", limitOver: "bütçenizi aştınız!",
    recurAddedTxt: "tekrarlayan işlem eklendi",
    instAddedTxt: "taksit eklendi",
    activeUser: "Aktif", switchUser: "Geçiş yap",
    editModeBanner: "✏️ Düzenleme modundasın",
    pdfTitle: "Finansal Özet Raporu",
    pdfUser: "Kullanıcı", pdfPeriod: "Dönem", pdfGenerated: "Oluşturuldu",
    pdfIncome: "Toplam Gelir", pdfExpense: "Toplam Gider", pdfNet: "Net Bakiye",
    pdfSaving: "Tasarruf Oranı", pdfTopCat: "En Çok Harcanan",
    pdfCatBreakdown: "Kategori Dağılımı", pdfTransactions: "İşlemler",
    pdfDate: "Tarih", pdfDesc: "Açıklama", pdfCat: "Kategori", pdfType: "Tür", pdfAmount: "Tutar",
  },
  en: {
    pageTitle: "Budget Tracker", pageSubtitle: "Manage your income & expenses smartly",
    sbLabelUsers: "Users", sbLabelAdd: "New User", sbLabelEdit: "Edit Active User",
    sbAddUserBtn: "+ Add User", sbRenameBtn: "✏️ Rename", sbDeleteBtn: "🗑️ Delete User",
    settingsTitle: "Settings", settingsBtn: "⚙️ Settings",
    labelAppearance: "Appearance & Language", labelTheme: "Theme", labelLang: "Language",
    labelExport: "Export", labelImport: "Import Backup", importBtn: "⬆️ Import JSON",
    lNetBalance: "Net Balance", lIncome: "Monthly Income", lExpense: "Monthly Expense", lSavingRate: "Saving Rate",
    lTopCat: "Top Category", lDailyAvg: "Daily Average", lBestDay: "Highest Spending Day",
    lBudgetGoal: "📎 Monthly Budget Goal", saveGoalBtn: "Save",
    lGoalPct: "Used", lGoalRemaining: "Remaining", lGoalStatus: "Status",
    lDailyChart: "Daily Expenses", lCompareChart: "Month Comparison", lYearlyChart: "Yearly Overview",
    lFormTitle: "New Transaction",
    lDesc: "Description", lTags: "Tags", lAmount: "Amount (₺)", lDate: "Date", lCat: "Category",
    lCatMgr: "Category Manager", addCatBtn: "+",
    lInstall: "📅 Installment expense", lInstallCount: "Installments", lInstallHint: "Amount split evenly.",
    lRecurring: "🔁 Recurring transaction", lRecurPeriod: "Frequency", lRecurEnd: "End Date",
    rOptMonthly: "Monthly", rOptWeekly: "Weekly", rOptYearly: "Yearly",
    saveTxBtn: "💾 Save", updateTxBtn: "✔ Update", cancelTxBtn: "✖ Cancel",
    lCatAnalysis: "Category Analysis", lTxHistory: "Transaction History",
    fOptAll: "All", fOptIncome: "Income", fOptExpense: "Expense",
    allCats: "All Categories",
    expBtnTxt: "💸 Expense", incBtnTxt: "💰 Income",
    enterName: "Enter a name.", userExists: "Name already exists.", enterNewName: "Enter a new name.",
    otherUserExists: "Another user has this name.", lastUser: "Cannot delete last user.",
    deleteUserConfirm: "and all transactions will be deleted. Sure?",
    enterCat: "Enter category name.", catExists: "Category exists.", catInUse: "Category in use.",
    deleteCatConfirm: "Delete category?",
    addCatFirst: "Add a category first.", fillFields: "Fill all fields.",
    deleteTxConfirm: "Delete this transaction?",
    recordText: "records", noTransMonth: "No transactions this month.",
    noTransFilter: "No matching records.", noCatYet: "No categories.",
    savedOk: "Saved ✓", updatedOk: "Updated ✓", deletedOk: "Deleted ✓",
    addedOk: "Added ✓", importedOk: "Imported ✓", exportedOk: "Exported ✓",
    invalidFile: "Invalid file.", overwriteConfirm: "Data will be overwritten. Continue?",
    emptyExport: "No data to export.",
    noData: "No data", savingLeft: "saved",
    compareUp: "↑ expenses up", compareDown: "↓ expenses down", compareSame: "same as last month",
    budgetGoalSet: "Goal saved ✓", budgetGoalEmpty: "Enter a target amount.",
    budgetStatusOk: "✅ On Track", budgetStatusWarn: "⚠️ 80% reached", budgetStatusOver: "🚨 Over Budget",
    goalNotSet: "Not set", goalHint: "Enter target amount...",
    limitWarn: "budget is 80% used!", limitOver: "budget exceeded!",
    recurAddedTxt: "recurring transactions added",
    instAddedTxt: "installments added",
    activeUser: "Active", switchUser: "Switch",
    editModeBanner: "✏️ Edit mode",
    pdfTitle: "Financial Summary Report",
    pdfUser: "User", pdfPeriod: "Period", pdfGenerated: "Generated",
    pdfIncome: "Total Income", pdfExpense: "Total Expense", pdfNet: "Net Balance",
    pdfSaving: "Saving Rate", pdfTopCat: "Top Category",
    pdfCatBreakdown: "Category Breakdown", pdfTransactions: "Transactions",
    pdfDate: "Date", pdfDesc: "Description", pdfCat: "Category", pdfType: "Type", pdfAmount: "Amount",
  }
};

i18n.de = {
  pageTitle: "Budget-Tracker", pageSubtitle: "Verwalte deine Einnahmen und Ausgaben intelligent",
  sbLabelUsers: "Nutzer", sbLabelAdd: "Neuer Nutzer", sbLabelEdit: "Aktiven Nutzer bearbeiten",
  sbAddUserBtn: "+ Nutzer hinzufügen", sbRenameBtn: "✏️ Umbenennen", sbDeleteBtn: "🗑️ Nutzer löschen",
  settingsTitle: "Einstellungen", settingsBtn: "⚙️ Einstellungen",
  labelAppearance: "Darstellung & Sprache", labelTheme: "Design", labelLang: "Sprache",
  labelExport: "Export", labelImport: "Backup importieren", importBtn: "⬆️ JSON importieren",
  lNetBalance: "Nettostand", lIncome: "Monatliche Einnahmen", lExpense: "Monatliche Ausgaben", lSavingRate: "Sparquote",
  lTopCat: "Top-Kategorie", lDailyAvg: "Tagesdurchschnitt", lBestDay: "Tag mit den höchsten Ausgaben",
  lBudgetGoal: "📎 Monatliches Budgetziel", saveGoalBtn: "Speichern",
  lGoalPct: "Verwendet", lGoalRemaining: "Verbleibend", lGoalStatus: "Status",
  lDailyChart: "Tägliche Ausgaben", lCompareChart: "Monatsvergleich", lYearlyChart: "Jahresübersicht",
  lFormTitle: "Neue Transaktion",
  lDesc: "Beschreibung", lTags: "Tags", lAmount: "Betrag (₺)", lDate: "Datum", lCat: "Kategorie",
  lCatMgr: "Kategorien verwalten", addCatBtn: "+",
  lInstall: "📅 Ratenzahlung", lInstallCount: "Raten", lInstallHint: "Betrag wird gleichmäßig aufgeteilt.",
  lRecurring: "🔁 Wiederkehrende Buchung", lRecurPeriod: "Intervall", lRecurEnd: "Enddatum",
  rOptMonthly: "Monatlich", rOptWeekly: "Wöchentlich", rOptYearly: "Jährlich",
  saveTxBtn: "💾 Speichern", updateTxBtn: "✔ Aktualisieren", cancelTxBtn: "✖ Abbrechen",
  lCatAnalysis: "Kategorienanalyse", lTxHistory: "Transaktionsverlauf",
  fOptAll: "Alle", fOptIncome: "Einnahmen", fOptExpense: "Ausgaben",
  allCats: "Alle Kategorien",
  expBtnTxt: "💸 Ausgabe", incBtnTxt: "💰 Einnahme",
  enterName: "Name eingeben.", userExists: "Name existiert bereits.", enterNewName: "Neuen Namen eingeben.",
  otherUserExists: "Ein anderer Nutzer hat diesen Namen.", lastUser: "Letzten Nutzer kann man nicht löschen.",
  deleteUserConfirm: "und alle Transaktionen werden gelöscht. Fortfahren?",
  enterCat: "Kategoriename eingeben.", catExists: "Kategorie existiert bereits.", catInUse: "Kategorie wird verwendet.",
  deleteCatConfirm: "Kategorie löschen?",
  addCatFirst: "Zuerst eine Kategorie hinzufügen.", fillFields: "Bitte alle Felder ausfüllen.",
  deleteTxConfirm: "Diese Transaktion löschen?",
  recordText: "Einträge", noTransMonth: "Diesen Monat noch keine Transaktionen.",
  noTransFilter: "Keine passenden Einträge.", noCatYet: "Keine Kategorien.",
  savedOk: "Gespeichert ✓", updatedOk: "Aktualisiert ✓", deletedOk: "Gelöscht ✓",
  addedOk: "Hinzugefügt ✓", importedOk: "Importiert ✓", exportedOk: "Exportiert ✓",
  invalidFile: "Ungültige Datei.", overwriteConfirm: "Daten werden überschrieben. Fortfahren?",
  emptyExport: "Keine Daten zum Exportieren.",
  noData: "Keine Daten", savingLeft: "gespart",
  compareUp: "↑ Ausgaben gestiegen", compareDown: "↓ Ausgaben gesunken", compareSame: "wie im letzten Monat",
  budgetGoalSet: "Ziel gespeichert ✓", budgetGoalEmpty: "Bitte Zielbetrag eingeben.",
  budgetStatusOk: "✅ Im Plan", budgetStatusWarn: "⚠️ 80% erreicht", budgetStatusOver: "🚨 Budget überschritten",
  goalNotSet: "Nicht festgelegt", goalHint: "Zielbetrag eingeben...",
  limitWarn: "Budget zu 80% aufgebraucht!", limitOver: "Budget überschritten!",
  recurAddedTxt: "wiederkehrende Buchungen hinzugefügt",
  instAddedTxt: "Raten hinzugefügt",
  activeUser: "Aktiv", switchUser: "Wechseln",
  editModeBanner: "✏️ Bearbeitungsmodus",
  pdfTitle: "Finanzübersicht",
  pdfUser: "Nutzer", pdfPeriod: "Zeitraum", pdfGenerated: "Erstellt",
  pdfIncome: "Gesamteinnahmen", pdfExpense: "Gesamtausgaben", pdfNet: "Nettostand",
  pdfSaving: "Sparquote", pdfTopCat: "Top-Kategorie",
  pdfCatBreakdown: "Kategorienverteilung", pdfTransactions: "Transaktionen",
  pdfDate: "Datum", pdfDesc: "Beschreibung", pdfCat: "Kategorie", pdfType: "Typ", pdfAmount: "Betrag",
};

i18n.es = {
  pageTitle: "Control de Presupuesto", pageSubtitle: "Gestiona tus ingresos y gastos de forma inteligente",
  sbLabelUsers: "Usuarios", sbLabelAdd: "Nuevo Usuario", sbLabelEdit: "Editar Usuario Activo",
  sbAddUserBtn: "+ Añadir Usuario", sbRenameBtn: "✏️ Renombrar", sbDeleteBtn: "🗑️ Eliminar Usuario",
  settingsTitle: "Configuración", settingsBtn: "⚙️ Configuración",
  labelAppearance: "Apariencia e idioma", labelTheme: "Tema", labelLang: "Idioma",
  labelExport: "Exportar", labelImport: "Importar copia", importBtn: "⬆️ Importar JSON",
  lNetBalance: "Balance Neto", lIncome: "Ingreso Mensual", lExpense: "Gasto Mensual", lSavingRate: "Tasa de Ahorro",
  lTopCat: "Categoría Principal", lDailyAvg: "Promedio Diario", lBestDay: "Día de Mayor Gasto",
  lBudgetGoal: "📎 Objetivo Mensual de Presupuesto", saveGoalBtn: "Guardar",
  lGoalPct: "Usado", lGoalRemaining: "Restante", lGoalStatus: "Estado",
  lDailyChart: "Gastos Diarios", lCompareChart: "Comparación Mensual", lYearlyChart: "Resumen Anual",
  lFormTitle: "Nueva Transacción",
  lDesc: "Descripción", lTags: "Etiquetas", lAmount: "Cantidad (₺)", lDate: "Fecha", lCat: "Categoría",
  lCatMgr: "Gestor de Categorías", addCatBtn: "+",
  lInstall: "📅 Gasto en cuotas", lInstallCount: "Cuotas", lInstallHint: "La cantidad se divide por igual.",
  lRecurring: "🔁 Transacción recurrente", lRecurPeriod: "Frecuencia", lRecurEnd: "Fecha de fin",
  rOptMonthly: "Mensual", rOptWeekly: "Semanal", rOptYearly: "Anual",
  saveTxBtn: "💾 Guardar", updateTxBtn: "✔ Actualizar", cancelTxBtn: "✖ Cancelar",
  lCatAnalysis: "Análisis por Categoría", lTxHistory: "Historial de Transacciones",
  fOptAll: "Todos", fOptIncome: "Ingresos", fOptExpense: "Gastos",
  allCats: "Todas las Categorías",
  expBtnTxt: "💸 Gasto", incBtnTxt: "💰 Ingreso",
  enterName: "Introduce un nombre.", userExists: "Ese nombre ya existe.", enterNewName: "Introduce un nombre nuevo.",
  otherUserExists: "Otro usuario ya tiene ese nombre.", lastUser: "No se puede eliminar el último usuario.",
  deleteUserConfirm: "y todas las transacciones se eliminarán. ¿Continuar?",
  enterCat: "Introduce nombre de categoría.", catExists: "La categoría ya existe.", catInUse: "La categoría está en uso.",
  deleteCatConfirm: "¿Eliminar categoría?",
  addCatFirst: "Primero añade una categoría.", fillFields: "Completa todos los campos.",
  deleteTxConfirm: "¿Eliminar esta transacción?",
  recordText: "registros", noTransMonth: "No hay transacciones este mes.",
  noTransFilter: "No hay registros coincidentes.", noCatYet: "No hay categorías.",
  savedOk: "Guardado ✓", updatedOk: "Actualizado ✓", deletedOk: "Eliminado ✓",
  addedOk: "Añadido ✓", importedOk: "Importado ✓", exportedOk: "Exportado ✓",
  invalidFile: "Archivo inválido.", overwriteConfirm: "Los datos se sobrescribirán. ¿Continuar?",
  emptyExport: "No hay datos para exportar.",
  noData: "Sin datos", savingLeft: "ahorrado",
  compareUp: "↑ gastos subieron", compareDown: "↓ gastos bajaron", compareSame: "igual que el mes pasado",
  budgetGoalSet: "Objetivo guardado ✓", budgetGoalEmpty: "Introduce una cantidad objetivo.",
  budgetStatusOk: "✅ En camino", budgetStatusWarn: "⚠️ 80% alcanzado", budgetStatusOver: "🚨 Presupuesto superado",
  goalNotSet: "No definido", goalHint: "Introduce la meta...",
  limitWarn: "¡el presupuesto alcanzó el 80%!", limitOver: "¡presupuesto superado!",
  recurAddedTxt: "transacciones recurrentes añadidas",
  instAddedTxt: "cuotas añadidas",
  activeUser: "Activo", switchUser: "Cambiar",
  editModeBanner: "✏️ Modo edición",
  pdfTitle: "Informe Financiero",
  pdfUser: "Usuario", pdfPeriod: "Período", pdfGenerated: "Generado",
  pdfIncome: "Ingreso Total", pdfExpense: "Gasto Total", pdfNet: "Balance Neto",
  pdfSaving: "Tasa de Ahorro", pdfTopCat: "Categoría Principal",
  pdfCatBreakdown: "Desglose por Categoría", pdfTransactions: "Transacciones",
  pdfDate: "Fecha", pdfDesc: "Descripción", pdfCat: "Categoría", pdfType: "Tipo", pdfAmount: "Cantidad",
};

// ─────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────
const defaultCats = [
  { name: "Market", color: "#3b82f6", limit: 5000 },
  { name: "Faturalar", color: "#ef4444", limit: 3000 },
  { name: "Kira", color: "#f97316", limit: 15000 },
  { name: "Giyim", color: "#a855f7", limit: 2000 },
  { name: "Teknoloji", color: "#10b981", limit: 10000 },
  { name: "Eğlence", color: "#ec4899", limit: 1500 },
  { name: "Diğer", color: "#6b7280", limit: 1000 }
];
const defaultUsers = [{ id: "u1", name: "Kullanıcı 1", color: "#4f6ef7" }];

function ls(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } }
function ss(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) { console.warn('Storage full'); } }

let state = {
  users: ls("bd_users", defaultUsers),
  txs: ls("bd_txs", []),
  cats: ls("bd_cats", defaultCats),
  activeId: ls("bd_active", "u1"),
  dark: ls("bd_dark", false),
  lang: ls("bd_lang", "tr"),
  currency: ls("bd_currency", "TRY"),
  budgetGoals: ls("bd_goals", {}),
  reminders: ls("bd_reminders", []),
  budgetPlans: ls("bd_plans", {}),   // { userId_YYYY-MM: { catName: amount } }
  pin: ls("bd_pin", null),           // hashed PIN or null
  pinEnabled: ls("bd_pin_enabled", false),
  currentDate: new Date(),
  editId: null,
  currentType: "EXPENSE",
  searchText: "",
  locked: false,
};

// Ensure activeId valid
if (!state.users.find(u => u.id === state.activeId)) state.activeId = state.users[0].id;

// Chart instances
let dailyChartInst = null, compareChartInst = null, yearlyChartInst = null;

// ─────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────
const T = k => (i18n[state.lang]?.[k] || i18n.en[k] || i18n.tr[k] || k);
const tx = (tr, en, de = en, es = en) => {
  if (state.lang === "tr") return tr;
  if (state.lang === "de") return de;
  if (state.lang === "es") return es;
  return en;
};

function localeByLang(lang) {
  if (lang === "tr") return "tr-TR";
  if (lang === "de") return "de-DE";
  if (lang === "es") return "es-ES";
  return "en-US";
}

function fmt(n) {
  const cur = state.currency || "TRY";
  const locale = localeByLang(state.lang);
  return new Intl.NumberFormat(locale, { style: "currency", currency: cur, maximumFractionDigits: 0 }).format(n || 0);
}

function fmtFull(n) {
  const cur = state.currency || "TRY";
  const locale = localeByLang(state.lang);
  return new Intl.NumberFormat(locale, { style: "currency", currency: cur, maximumFractionDigits: 2 }).format(n || 0);
}

function monthKey(d) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; }
function goalKey() { return `${state.activeId}_${monthKey(state.currentDate)}`; }

function getMonthLabel(d) {
  return d.toLocaleDateString(localeByLang(state.lang), { month: "long", year: "numeric" });
}

function getActiveUser() { return state.users.find(u => u.id === state.activeId) || state.users[0]; }

function getMonthTxs(userId, year, month) {
  return state.txs.filter(t => {
    const d = new Date(t.date);
    return t.userId === userId && d.getFullYear() === year && d.getMonth() === month;
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}

function currentMonthTxs() {
  return getMonthTxs(state.activeId, state.currentDate.getFullYear(), state.currentDate.getMonth());
}

function prevMonthTxs() {
  const p = new Date(state.currentDate); p.setDate(1); p.setMonth(p.getMonth() - 1);
  return getMonthTxs(state.activeId, p.getFullYear(), p.getMonth());
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function saveState() {
  ss("bd_users", state.users);
  ss("bd_txs", state.txs);
  ss("bd_cats", state.cats);
  ss("bd_active", state.activeId);
  ss("bd_dark", state.dark);
  ss("bd_lang", state.lang);
  ss("bd_currency", state.currency);
  ss("bd_goals", state.budgetGoals);
  ss("bd_reminders", state.reminders);
  ss("bd_plans", state.budgetPlans);
  ss("bd_pin", state.pin);
  ss("bd_pin_enabled", state.pinEnabled);
}

// ─────────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────────
function toast(msg, type = "info") {
  const c = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  const icons = { success:"✅", error:"🚫", warning:"⚠️", info:"ℹ️" };
  el.innerHTML = `<span>${icons[type]||"ℹ️"}</span><span>${msg}</span>`;
  c.appendChild(el);
  requestAnimationFrame(() => { requestAnimationFrame(() => el.classList.add("show")); });
  setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 320); }, 3200);
}

// ─────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────
function openModal(id) { document.getElementById(id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }

// ─────────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────────
function openSidebar() { document.getElementById("sidebar").classList.add("open"); document.getElementById("sidebarOverlay").classList.add("show"); document.body.style.overflow = "hidden"; }
function closeSidebar() { document.getElementById("sidebar").classList.remove("open"); document.getElementById("sidebarOverlay").classList.remove("show"); document.body.style.overflow = ""; }

// ─────────────────────────────────────────────────
// THEME & LANG
// ─────────────────────────────────────────────────
function applyTheme() {
  document.body.classList.toggle("dark", state.dark);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = state.dark ? "☀️ Light" : "🌙 Dark";
  if (dailyChartInst) { dailyChartInst.destroy(); dailyChartInst = null; }
  if (compareChartInst) { compareChartInst.destroy(); compareChartInst = null; }
  if (yearlyChartInst) { yearlyChartInst.destroy(); yearlyChartInst = null; }
}
function toggleDark() { state.dark = !state.dark; saveState(); applyTheme(); renderAll(); }

function applyLang() {
  const lb = document.getElementById("langBtn");
  if (lb) lb.textContent = state.lang.toUpperCase();
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = state.lang;
  // update static i18n elements
  const ids = ["pageTitle","pageSubtitle","sbLabelUsers","sbLabelAdd","sbLabelEdit",
    "sbAddUserBtn","sbRenameBtn","sbDeleteBtn","settingsTitle","settingsBtn",
    "labelAppearance","labelTheme","labelLang","labelExport","labelImport","importBtn",
    "lNetBalance","lIncome","lExpense","lSavingRate","lTopCat","lDailyAvg","lBestDay",
    "lBudgetGoal","saveGoalBtn","lGoalPct","lGoalRemaining","lGoalStatus",
    "lDailyChart","lCompareChart","lYearlyChart","lFormTitle",
    "lDesc","lTags","lAmount","lDate","lCat","lCatMgr","addCatBtn",
    "lInstall","lInstallHint","lRecurring","lRecurPeriod","lRecurEnd",
    "rOptMonthly","rOptWeekly","rOptYearly",
    "saveTxBtn","updateTxBtn","cancelTxBtn","lCatAnalysis","lTxHistory",
    "fOptAll","fOptIncome","fOptExpense"
  ];
  ids.forEach(id => { const el = document.getElementById(id); if (el && T(id)) el.textContent = T(id); });
  // update tab buttons
  document.getElementById("expBtn").textContent = T("expBtnTxt");
  document.getElementById("incBtn").textContent = T("incBtnTxt");
  document.getElementById("fDesc").placeholder = tx("Örn: Market alışverişi", "Ex: Groceries", "Z. B.: Einkauf", "Ej: compras");
  document.getElementById("fTags").placeholder = tx("tatil, araba...", "holiday, car...", "urlaub, auto...", "vacaciones, coche...");
  document.getElementById("newCatName").placeholder = tx("Yeni kategori...", "New category...", "Neue Kategorie...", "Nueva categoría...");
  const gi = document.getElementById("goalInput");
  if (gi) gi.placeholder = T("goalHint");
  // lInstallCount has a span inside
  const lic = document.getElementById("lInstallCount");
  if (lic) lic.childNodes[0].textContent = T("lInstallCount") + ": ";
}

function setLang(lang) {
  const normalized = ["tr", "en", "de", "es"].includes(lang) ? lang : "tr";
  if (state.lang === normalized) return;
  state.lang = normalized;
  saveState();
  applyLang();
  renderAll();
}

function toggleLang() {
  const order = ["tr", "en", "de", "es"];
  const idx = order.indexOf(state.lang);
  setLang(order[(idx + 1) % order.length]);
}

// ─────────────────────────────────────────────────
// USERS
// ─────────────────────────────────────────────────
function renderUsers() {
  const box = document.getElementById("userList"); box.innerHTML = "";
  state.users.forEach(u => {
    const el = document.createElement("div"); el.className = `user-chip${u.id===state.activeId?" active":""}`;
    el.innerHTML = `<div class="avatar" style="background:${u.color}">${u.name.charAt(0).toUpperCase()}</div>
      <div class="user-info"><div class="user-name">${u.name}</div>
      <div class="user-badge">${u.id===state.activeId ? T("activeUser") : T("switchUser")}</div></div>`;
    el.onclick = () => { state.activeId = u.id; saveState(); renderAll(); closeSidebar(); };
    box.appendChild(el);
  });
  document.getElementById("activeUserBadge").textContent = getActiveUser().name;
  document.getElementById("editUserName").value = getActiveUser().name;
}

function addUser() {
  const name = document.getElementById("newUserName").value.trim();
  if (!name) return toast(T("enterName"), "error");
  if (state.users.some(u => u.name.toLowerCase() === name.toLowerCase())) return toast(T("userExists"), "error");
  const colors = ["#4f6ef7","#db2777","#059669","#ea580c","#7c3aed","#0891b2"];
  const newUser = { id: uid(), name, color: colors[Math.floor(Math.random()*colors.length)] };
  state.users.push(newUser);
  state.activeId = newUser.id;
  document.getElementById("newUserName").value = "";
  saveState(); renderAll(); closeSidebar(); toast(T("addedOk"), "success");
}

function renameUser() {
  const n = document.getElementById("editUserName").value.trim();
  if (!n) return toast(T("enterNewName"), "error");
  if (state.users.some(u => u.id !== state.activeId && u.name.toLowerCase() === n.toLowerCase())) return toast(T("otherUserExists"), "error");
  state.users = state.users.map(u => u.id === state.activeId ? {...u, name: n} : u);
  state.txs = state.txs.map(t => t.userId === state.activeId ? {...t, owner: n} : t);
  saveState(); renderAll(); closeSidebar(); toast(T("updatedOk"), "success");
}

function deleteUser() {
  if (state.users.length <= 1) return toast(T("lastUser"), "error");
  if (!confirm(`${getActiveUser().name} ${T("deleteUserConfirm")}`)) return;
  state.txs = state.txs.filter(t => t.userId !== state.activeId);
  state.users = state.users.filter(u => u.id !== state.activeId);
  state.activeId = state.users[0].id;
  saveState(); renderAll(); closeSidebar(); toast(T("deletedOk"), "info");
}

// ─────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────
function renderCatSelect() {
  const sel = document.getElementById("fCat"); sel.innerHTML = "";
  if (!state.cats.length) { sel.innerHTML = `<option value="">${T("noCatYet")}</option>`; return; }
  state.cats.forEach(c => sel.innerHTML += `<option value="${c.name}">${c.name}</option>`);
}

function renderCatFilter() {
  const sel = document.getElementById("catFilter");
  const cv = sel.value;
  sel.innerHTML = `<option value="ALL">${T("allCats")}</option>`;
  state.cats.forEach(c => sel.innerHTML += `<option value="${c.name}">${c.name}</option>`);
  if (cv) sel.value = cv;
}

function renderCatMini() {
  const box = document.getElementById("catListMini"); box.innerHTML = "";
  state.cats.forEach(c => {
    const chip = document.createElement("div"); chip.className = "cat-chip";
    chip.innerHTML = `<span class="cat-dot" style="background:${c.color}"></span>
      <span>${c.name}</span>
      <button class="cat-chip-del" onclick="deleteCat('${c.name.replace(/'/g,"\\'")}',event)" title="Sil">×</button>`;
    box.appendChild(chip);
  });
}

function addCategory() {
  const name = document.getElementById("newCatName").value.trim();
  const color = document.getElementById("newCatColor").value;
  if (!name) return toast(T("enterCat"), "error");
  if (state.cats.some(c => c.name.toLowerCase() === name.toLowerCase())) return toast(T("catExists"), "error");
  state.cats.push({ name, color, limit: 3000 });
  document.getElementById("newCatName").value = "";
  saveState(); renderCatSelect(); renderCatFilter(); renderCatMini(); toast(T("addedOk"), "success");
}

function updateCatLimit(name, val) {
  state.cats = state.cats.map(c => c.name === name ? {...c, limit: Math.max(0, Number(val))} : c);
  saveState(); renderCatAnalysis(currentMonthTxs());
}

function deleteCat(name, e) {
  e.stopPropagation();
  if (state.txs.some(t => t.category === name)) return toast(T("catInUse"), "error");
  if (!confirm(`"${name}" ${T("deleteCatConfirm")}`)) return;
  state.cats = state.cats.filter(c => c.name !== name);
  saveState(); renderCatSelect(); renderCatFilter(); renderCatMini(); renderCatAnalysis(currentMonthTxs()); toast(T("deletedOk"), "info");
}

// ─────────────────────────────────────────────────
// FORM
// ─────────────────────────────────────────────────
function setType(type) {
  state.currentType = type;
  document.getElementById("expBtn").classList.toggle("active", type === "EXPENSE");
  document.getElementById("incBtn").classList.toggle("active", type === "INCOME");
  document.getElementById("installBox").style.display = type === "EXPENSE" ? "" : "none";
  document.getElementById("recurringBox").style.display = "";
}

function toggleInstall() {
  const show = document.getElementById("fInstall").checked;
  document.getElementById("installControls").style.display = show ? "" : "none";
  if (show) document.getElementById("fRecurring").checked = false;
  document.getElementById("recurringControls").style.display = "none";
}

function toggleRecurring() {
  const show = document.getElementById("fRecurring").checked;
  document.getElementById("recurringControls").style.display = show ? "" : "none";
  if (show) { document.getElementById("fInstall").checked = false; document.getElementById("installControls").style.display = "none"; }
}
document.getElementById("fRecurring").addEventListener("change", toggleRecurring);

function updateInstLabel() { document.getElementById("instLabel").textContent = document.getElementById("instRange").value; }

function clearForm() {
  document.getElementById("fDesc").value = "";
  document.getElementById("fAmount").value = "";
  document.getElementById("fTags").value = "";
  document.getElementById("fNote").value = "";
  document.getElementById("fInstall").checked = false;
  document.getElementById("installControls").style.display = "none";
  document.getElementById("instRange").value = 3; updateInstLabel();
  document.getElementById("fRecurring").checked = false;
  document.getElementById("recurringControls").style.display = "none";
  document.getElementById("recurEnd").value = "";
  document.getElementById("fDate").value = new Date().toISOString().split("T")[0];
}

function checkBudgetAlert(catName) {
  const catObj = state.cats.find(c => c.name === catName);
  if (!catObj || catObj.limit <= 0 || state.currentType !== "EXPENSE") return;
  const spent = currentMonthTxs().filter(t => t.type === "EXPENSE" && t.category === catName).reduce((s,t) => s+t.amount, 0);
  if (spent > catObj.limit) toast(`"${catName}" ${T("limitOver")}`, "error");
  else if (spent >= catObj.limit * 0.8) toast(`"${catName}" ${T("limitWarn")}`, "warning");
}

function checkMonthlyGoalAlert() {
  const goal = state.budgetGoals[goalKey()];
  if (!goal) return;
  const spent = currentMonthTxs().filter(t => t.type === "EXPENSE").reduce((s,t) => s+t.amount, 0);
  if (spent > goal) toast(`🚨 ${T("budgetStatusOver")}`, "error");
  else if (spent >= goal * 0.8) toast(`⚠️ ${T("budgetStatusWarn")}`, "warning");
}




function cancelEdit() {
  state.editId = null;
  document.getElementById("editBanner").style.display = "none";
  document.getElementById("normalBtns").style.display = "";
  document.getElementById("editBtns").style.display = "none";
  clearForm(); setType("EXPENSE");
}

function deleteTx(id) {
  if (!confirm(T("deleteTxConfirm"))) return;
  state.txs = state.txs.filter(t => t.id !== id);
  saveState(); renderAll(); toast(T("deletedOk"), "info");
}

// ─────────────────────────────────────────────────
// MONTH NAV
// ─────────────────────────────────────────────────
function changeMonth(offset) {
  const d = state.currentDate;
  state.currentDate = new Date(d.getFullYear(), d.getMonth() + offset, 1);
  renderAll();
}

// ─────────────────────────────────────────────────
// BUDGET GOAL
// ─────────────────────────────────────────────────
function saveBudgetGoal() {
  const val = parseFloat(document.getElementById("goalInput").value);
  if (!val || val <= 0) return toast(T("budgetGoalEmpty"), "error");
  state.budgetGoals[goalKey()] = val;
  document.getElementById("goalInput").value = "";
  saveState(); renderBudgetGoal(currentMonthTxs()); toast(T("budgetGoalSet"), "success");
}

function renderBudgetGoal(monthly) {
  const goal = state.budgetGoals[goalKey()] || 0;
  const spent = monthly.filter(t => t.type === "EXPENSE").reduce((s,t) => s+t.amount, 0);
  const pct = goal > 0 ? Math.min((spent/goal)*100, 100) : 0;
  const remaining = goal - spent;

  document.getElementById("goalSpentLabel").textContent = `${T("pdfExpense")}: ${fmt(spent)}`;
  document.getElementById("goalLimitLabel").textContent = goal > 0 ? `${T("lBudgetGoal").replace("📎 ","")}: ${fmt(goal)}` : T("goalNotSet");

  const fill = document.getElementById("goalBarFill");
  fill.style.width = pct + "%";
  fill.style.background = pct >= 100 ? "var(--red)" : pct >= 80 ? "var(--amber)" : "var(--green)";

  document.getElementById("goalPct").textContent = goal > 0 ? `%${pct.toFixed(1)}` : "—";
  document.getElementById("goalPct").style.color = pct >= 100 ? "var(--red)" : pct >= 80 ? "var(--amber)" : "var(--green)";
  document.getElementById("goalRemaining").textContent = goal > 0 ? fmt(remaining) : "—";
  document.getElementById("goalRemaining").style.color = remaining < 0 ? "var(--red)" : "var(--green)";
  document.getElementById("goalStatus").textContent = goal <= 0 ? "—" : pct >= 100 ? T("budgetStatusOver") : pct >= 80 ? T("budgetStatusWarn") : T("budgetStatusOk");
  if (goal > 0) document.getElementById("goalInput").placeholder = fmt(goal);
}

// ─────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────
function renderStats(monthly, prev) {
  const income = monthly.filter(t => t.type==="INCOME").reduce((s,t) => s+t.amount, 0);
  const expense = monthly.filter(t => t.type==="EXPENSE").reduce((s,t) => s+t.amount, 0);
  const prevInc = prev.filter(t => t.type==="INCOME").reduce((s,t) => s+t.amount, 0);
  const prevExp = prev.filter(t => t.type==="EXPENSE").reduce((s,t) => s+t.amount, 0);

  document.getElementById("statNet").textContent = fmt(income - expense);
  document.getElementById("statIncome").textContent = fmt(income);
  document.getElementById("statExpense").textContent = fmt(expense);

  const sr = income > 0 ? Math.round(((income-expense)/income)*100) : 0;
  document.getElementById("statSaving").textContent = `%${sr}`;
  document.getElementById("statSaving").style.color = sr >= 20 ? "var(--green)" : sr >= 0 ? "var(--accent)" : "var(--red)";
  document.getElementById("statSavingNote").textContent = income > 0 ? `${fmt(income-expense)} ${T("savingLeft")}` : T("noData");

  // changes
  const setChange = (elId, curr, prev) => {
    const el = document.getElementById(elId);
    if (!prev) { el.textContent = ""; return; }
    const d = ((curr-prev)/prev*100).toFixed(1);
    el.textContent = `${d > 0 ? "+" : ""}%${d}`;
    el.className = `stat-change ${curr > prev ? "up" : curr < prev ? "down" : "neutral"}`;
  };
  setChange("statIncomeChange", income, prevInc);
  setChange("statExpenseChange", expense, prevExp);

  // Insights
  const expenses = monthly.filter(t => t.type==="EXPENSE");
  if (expenses.length) {
    const catMap = {}; expenses.forEach(t => catMap[t.category] = (catMap[t.category]||0)+t.amount);
    const top = Object.entries(catMap).sort((a,b) => b[1]-a[1])[0];
    document.getElementById("statTopCat").textContent = top[0];
    document.getElementById("statTopCatAmt").textContent = fmt(top[1]);

    const dayMap = {}; expenses.forEach(t => dayMap[t.date] = (dayMap[t.date]||0)+t.amount);
    const maxDay = Object.entries(dayMap).sort((a,b) => b[1]-a[1])[0];
    const dayNum = new Date(maxDay[0]).getDate();
    document.getElementById("statBestDay").textContent = dayNum + ". " + getMonthLabel(new Date(maxDay[0])).split(" ")[0];
    document.getElementById("statBestDayAmt").textContent = fmt(maxDay[1]);

    const days = new Date().getMonth() === state.currentDate.getMonth() && new Date().getFullYear() === state.currentDate.getFullYear()
      ? new Date().getDate()
      : new Date(state.currentDate.getFullYear(), state.currentDate.getMonth()+1, 0).getDate();
    document.getElementById("statDailyAvg").textContent = fmt(expense / days);
    document.getElementById("statDailyAvgNote").textContent = tx("bu ay", "this month", "diesen Monat", "este mes");
  } else {
    ["statTopCat","statBestDay","statDailyAvg"].forEach(id => document.getElementById(id).textContent = "—");
    ["statTopCatAmt","statBestDayAmt","statDailyAvgNote"].forEach(id => document.getElementById(id).textContent = T("noData"));
  }
}

// ─────────────────────────────────────────────────
// CATEGORY ANALYSIS
// ─────────────────────────────────────────────────
function renderCatAnalysis(monthly) {
  const expenses = monthly.filter(t => t.type==="EXPENSE");
  const totalExp = expenses.reduce((s,t) => s+t.amount, 0);
  const catData = state.cats.map(c => ({ ...c, spent: expenses.filter(t => t.category===c.name).reduce((s,t) => s+t.amount, 0) }));

  // Helper to render into any container set
  function renderInto(containerId, donutId, donutValId, donutLblId, legendId) {
    const container = document.getElementById(containerId);
    const donut = document.getElementById(donutId);
    const legend = document.getElementById(legendId);
    if (!container || !donut || !legend) return;
    container.innerHTML = ""; legend.innerHTML = "";

    catData.forEach(c => {
      const row = document.createElement("div"); row.className = "cat-analysis-row";
      const pct = c.limit > 0 ? Math.min((c.spent/c.limit)*100, 100) : 0;
      const over = c.limit > 0 && c.spent > c.limit;
      row.innerHTML = `
        <div class="cat-row-top">
          <span style="font-weight:700;font-size:13px;display:flex;align-items:center;gap:6px;">
            <span style="width:10px;height:10px;border-radius:50%;background:${c.color};display:inline-block;"></span>${c.name}
          </span>
          <div style="display:flex;align-items:center;gap:6px;">
            <input type="number" value="${c.limit}" style="width:80px;padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);font-family:var(--font);font-size:12px;outline:none;" onchange="updateCatLimit('${c.name.replace(/'/g,"\\'")}',this.value)" />
            ${over ? '<span class="stat-pill pill-red">⚠️</span>' : ''}
          </div>
        </div>
        <div class="cat-row-meta">
          <span>${fmt(c.spent)} / ${fmt(c.limit)}</span>
          <span>${c.limit > 0 ? pct.toFixed(1)+'%' : ''}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${over?'var(--red)':c.color};"></div></div>
      `;
      container.appendChild(row);
    });

    const nonZero = catData.filter(c => c.spent > 0);
    if (!nonZero.length || totalExp <= 0) {
      donut.style.background = "var(--bg2)";
      const dv = document.getElementById(donutValId); if (dv) dv.textContent = "—";
      return;
    }
    let cur = 0;
    const segs = nonZero.map(c => { const p = (c.spent/totalExp)*100; const s = cur; cur += p; return `${c.color} ${s}% ${cur}%`; });
    donut.style.background = `conic-gradient(${segs.join(", ")})`;
    const top = [...nonZero].sort((a,b) => b.spent-a.spent)[0];
    const dv = document.getElementById(donutValId); if (dv) dv.textContent = top.name;
    const dl = document.getElementById(donutLblId); if (dl) dl.textContent = T("lCatAnalysis").toLowerCase();
    nonZero.slice(0,5).forEach(c => {
      const li = document.createElement("div"); li.className = "legend-item";
      li.innerHTML = `<span class="legend-dot" style="background:${c.color}"></span><span>${c.name} — ${fmt(c.spent)}</span>`;
      legend.appendChild(li);
    });
  }

  // Mobile container (mob-analysis-cat)
  renderInto("catAnalysisList", "donut", "donutVal", "donutLbl", "donutLegend");
  // Desktop container (right-col)
  renderInto("catAnalysisListD", "donutD", "donutValD", null, "donutLegendD");
}

// ─────────────────────────────────────────────────
// CHARTS
// ─────────────────────────────────────────────────
function chartColors() {
  return {
    text: state.dark ? "#b0bdd8" : "#7b85a0",
    grid: state.dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)",
    tooltip: { bg: state.dark ? "#1a2438" : "#ffffff", border: state.dark ? "#1e2d45" : "#e2e6f0", titleColor: state.dark ? "#e8edf8" : "#0d1117", bodyColor: state.dark ? "#b0bdd8" : "#7b85a0" }
  };
}

function baseChartOptions(cc) {
  return {
    responsive: true, maintainAspectRatio: false,
    animation: { duration: 600, easing: 'easeInOutQuart' },
    transitions: { active: { animation: { duration: 200 } } },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: cc.tooltip.bg, borderColor: cc.tooltip.border, borderWidth: 1,
        titleColor: cc.tooltip.titleColor, bodyColor: cc.tooltip.bodyColor,
        callbacks: { label: ctx => fmtFull(ctx.raw) }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: cc.text, font: { family: "'Plus Jakarta Sans'" } } },
      y: { grid: { color: cc.grid }, ticks: { color: cc.text, font: { family: "'JetBrains Mono'" }, callback: v => fmt(v) } }
    }
  };
}

function renderDailyChart(monthly) {
  const ctx = document.getElementById("dailyChart").getContext("2d");
  const cc = chartColors();
  const days = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth()+1, 0).getDate();
  const labels = Array.from({length: days}, (_,i) => i+1);
  const data = new Array(days).fill(0);
  monthly.filter(t => t.type==="EXPENSE").forEach(t => { data[new Date(t.date).getDate()-1] += t.amount; });

  if (dailyChartInst) dailyChartInst.destroy();
  dailyChartInst = new Chart(ctx, {
    type: "line",
    data: { labels, datasets: [{ data, borderColor: "#4f6ef7", backgroundColor: "rgba(79,110,247,0.08)", borderWidth: 2, tension: 0.4, fill: true, pointRadius: 2, pointHoverRadius: 5 }] },
    options: { ...baseChartOptions(cc), plugins: { ...baseChartOptions(cc).plugins, legend: { display: false } } }
  });
}

function renderComparisonChart() {
  const ctx = document.getElementById("compareChart").getContext("2d");
  const cc = chartColors();
  const months = parseInt(document.getElementById("compareRange").value) || 6;

  const labels = [], incData = [], expData = [];
  for (let i = months-1; i >= 0; i--) {
    const d = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() - i, 1);
    const txs = getMonthTxs(state.activeId, d.getFullYear(), d.getMonth());
    const shortMonth = d.toLocaleDateString(localeByLang(state.lang), { month: "short" });
    labels.push(shortMonth);
    incData.push(txs.filter(t => t.type==="INCOME").reduce((s,t) => s+t.amount, 0));
    expData.push(txs.filter(t => t.type==="EXPENSE").reduce((s,t) => s+t.amount, 0));
  }

  if (compareChartInst) compareChartInst.destroy();
  compareChartInst = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: T("lIncome"), data: incData, backgroundColor: "rgba(16,183,127,0.7)", borderRadius: 5 },
        { label: T("lExpense"), data: expData, backgroundColor: "rgba(240,76,101,0.7)", borderRadius: 5 }
      ]
    },
    options: {
      ...baseChartOptions(cc),
      plugins: {
        ...baseChartOptions(cc).plugins,
        legend: { display: true, labels: { color: cc.text, font: { family: "'Plus Jakarta Sans'", weight: "600" }, boxWidth: 12, borderRadius: 4 } }
      }
    }
  });
}

function renderYearlyChart() {
  const ctx = document.getElementById("yearlyChart").getContext("2d");
  const cc = chartColors();
  const year = state.currentDate.getFullYear();
  const netData = [], labels = [];

  for (let m = 0; m < 12; m++) {
    const txs = getMonthTxs(state.activeId, year, m);
    const inc = txs.filter(t => t.type==="INCOME").reduce((s,t) => s+t.amount, 0);
    const exp = txs.filter(t => t.type==="EXPENSE").reduce((s,t) => s+t.amount, 0);
    const d = new Date(year, m, 1);
    labels.push(d.toLocaleDateString(localeByLang(state.lang), { month: "short" }));
    netData.push(inc - exp);
  }

  if (yearlyChartInst) yearlyChartInst.destroy();
  yearlyChartInst = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        data: netData,
        backgroundColor: netData.map(v => v >= 0 ? "rgba(16,183,127,0.7)" : "rgba(240,76,101,0.7)"),
        borderRadius: 5
      }]
    },
    options: { ...baseChartOptions(cc), plugins: { ...baseChartOptions(cc).plugins } }
  });
}

// ─────────────────────────────────────────────────
// TRANSACTION LIST
// ─────────────────────────────────────────────────
function renderTxList() {
  const list = document.getElementById("txList"); list.innerHTML = "";
  const monthly = currentMonthTxs();
  const search = document.getElementById("searchInput").value.toLowerCase();
  const typeF = document.getElementById("typeFilter").value;
  const catF = document.getElementById("catFilter").value;

  const filtered = monthly.filter(t => {
    const matchSearch = t.desc.toLowerCase().includes(search) || (t.tags||[]).some(tag => tag.toLowerCase().includes(search)) || t.category.toLowerCase().includes(search);
    const matchType = typeF === "ALL" || t.type === typeF;
    const matchCat = catF === "ALL" || t.category === catF;
    return matchSearch && matchType && matchCat;
  });

  document.getElementById("txCount").textContent = `${filtered.length} ${T("recordText")}`;

  if (!monthly.length) { list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📭</div><div class="empty-state-text">${T("noTransMonth")}</div></div>`; return; }
  if (!filtered.length) { list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">${T("noTransFilter")}</div></div>`; return; }

  const cat = state.cats.find(c => c.name === (filtered[0]||{}).category);
  filtered.forEach(tx => {
    const isIncome = tx.type === "INCOME";
    const dateStr = new Date(tx.date).toLocaleDateString(localeByLang(state.lang));
    const catObj = state.cats.find(c => c.name === tx.category);
    const tagsHtml = tx.tags?.length ? `<div class="tx-tags">${tx.tags.map(t => `<span class="tag-pill">#${t}</span>`).join("")}</div>` : "";
    const noteHtml = tx.note ? `<div class="tx-note">📝 ${tx.note}</div>` : "";
    const recurBadge = tx.isRecurring ? `<span class="stat-pill pill-purple">🔁</span>` : "";
    const instBadge = tx.isInstallment ? `<span class="stat-pill pill-blue">📅</span>` : "";
    const curBadge = (tx.txCurrency && tx.txCurrency !== state.currency && tx.origAmount)
      ? `<span class="tx-currency-badge">${tx.origAmount % 1 === 0 ? tx.origAmount : tx.origAmount.toFixed(2)} ${tx.txCurrency}</span>` : "";
    const iconStyle = isIncome ? "income" : "";
    const iconChar = isIncome ? "+" : (catObj ? catObj.name.charAt(0) : "?");

    const item = document.createElement("div"); item.className = "tx-item"; item.dataset.txid = tx.id;
    item.innerHTML = `
      <div class="tx-left">
        <div class="tx-icon ${iconStyle}" style="${catObj && !isIncome ? `background:${catObj.color}22;color:${catObj.color}` : ""}">${iconChar}</div>
        <div class="tx-body">
          <div class="tx-desc">${tx.desc}</div>
          <div class="tx-meta">${tx.category} · ${dateStr} ${recurBadge}${instBadge}${curBadge}</div>
          ${tagsHtml}
          ${noteHtml}
        </div>
      </div>
      <div class="tx-right">
        <span class="tx-amount ${isIncome?"income":"expense"}">${isIncome?"+":"-"}${fmtFull(tx.amount)}</span>
        <button class="tx-action-btn edit-tx" onclick="startEdit('${tx.id}')">${T("updateTxBtn").replace("✔ ","")}</button>
        <button class="tx-action-btn del-tx" onclick="deleteTx('${tx.id}')">×</button>
      </div>
    `;
    list.appendChild(item);
  });
}

// ─────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────
function exportJSON() {
  const data = { exportedAt: new Date().toISOString(), user: getActiveUser().name, month: getMonthLabel(state.currentDate), transactions: currentMonthTxs(), categories: state.cats };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  a.download = `butce-${monthKey(state.currentDate)}.json`; a.click(); toast(T("exportedOk"), "success");
}

function exportCSV() {
  const txs = currentMonthTxs(); if (!txs.length) return toast(T("emptyExport"), "info");
  const heads = state.lang === "tr"
    ? ["Tarih","Açıklama","Etiketler","Kategori","Tür","Tutar"]
    : state.lang === "de"
      ? ["Datum","Beschreibung","Tags","Kategorie","Typ","Betrag"]
      : state.lang === "es"
        ? ["Fecha","Descripción","Etiquetas","Categoría","Tipo","Importe"]
        : ["Date","Description","Tags","Category","Type","Amount"];
  const rows = txs.map(t => [t.date, t.desc, (t.tags||[]).join(";"), t.category, t.type === "INCOME" ? T("fOptIncome") : T("fOptExpense"), t.amount]);
  const csv = [heads, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(";")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob(["\uFEFF"+csv], { type: "text/csv;charset=utf-8;" }));
  a.download = `butce-${monthKey(state.currentDate)}.csv`; a.click(); toast(T("exportedOk"), "success");
}

function exportExcel() {
  if (typeof XLSX === "undefined") return toast("XLSX kütüphanesi yüklenemedi", "error");
  const txs = currentMonthTxs(); if (!txs.length) return toast(T("emptyExport"), "info");
  const wsData = [
    [T("pdfDate"), T("pdfDesc"), "Tags", T("pdfCat"), T("pdfType"), T("pdfAmount")],
    ...txs.map(t => [t.date, t.desc, (t.tags||[]).join(";"), t.category, t.type === "INCOME" ? T("fOptIncome") : T("fOptExpense"), t.amount])
  ];
  const ws = XLSX.utils.aoa_to_sheet(wsData);
  ws["!cols"] = [{wch:12},{wch:30},{wch:20},{wch:15},{wch:10},{wch:14}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, getMonthLabel(state.currentDate));
  XLSX.writeFile(wb, `butce-${monthKey(state.currentDate)}.xlsx`);
  toast(T("exportedOk"), "success");
}

function exportPDF() {
  if (typeof jspdf === "undefined") return toast("PDF kütüphanesi yüklenemedi", "error");
  const { jsPDF } = jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const txs = currentMonthTxs();
  const income = txs.filter(t => t.type==="INCOME").reduce((s,t) => s+t.amount, 0);
  const expense = txs.filter(t => t.type==="EXPENSE").reduce((s,t) => s+t.amount, 0);
  const net = income - expense;
  const sr = income > 0 ? Math.round(((income-expense)/income)*100) : 0;

  const au = getActiveUser();
  const W = 210, M = 18;

  // Header bg
  doc.setFillColor(13, 17, 23);
  doc.roundedRect(M, 14, W-M*2, 38, 4, 4, "F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(16); doc.setFont("helvetica","bold");
  doc.text(T("pdfTitle"), M+8, 28);
  doc.setFontSize(9); doc.setFont("helvetica","normal");
  doc.setTextColor(200,210,230);
  doc.text(`${T("pdfUser")}: ${au.name}   |   ${T("pdfPeriod")}: ${getMonthLabel(state.currentDate)}   |   ${T("pdfGenerated")}: ${new Date().toLocaleDateString()}`, M+8, 36);
  doc.text(`BütçeDostu v2`, M+8, 44);

  // Stats row
  let y = 64;
  const statBoxW = (W-M*2-9)/4;
  const statsData = [
    { label: T("pdfIncome"), val: fmtFull(income), color: [16,183,127] },
    { label: T("pdfExpense"), val: fmtFull(expense), color: [240,76,101] },
    { label: T("pdfNet"), val: fmtFull(net), color: net >= 0 ? [79,110,247] : [240,76,101] },
    { label: T("pdfSaving"), val: `%${sr}`, color: sr >= 20 ? [16,183,127] : sr >= 0 ? [79,110,247] : [240,76,101] }
  ];

  statsData.forEach((s, i) => {
    const x = M + i*(statBoxW+3);
    doc.setFillColor(248, 249, 252);
    doc.roundedRect(x, y-8, statBoxW, 24, 3, 3, "F");
    doc.setDrawColor(225, 228, 235);
    doc.roundedRect(x, y-8, statBoxW, 24, 3, 3, "S");
    doc.setFontSize(8); doc.setFont("helvetica","normal"); doc.setTextColor(120,130,150);
    doc.text(s.label, x+4, y);
    doc.setFontSize(11); doc.setFont("helvetica","bold"); doc.setTextColor(...s.color);
    doc.text(s.val, x+4, y+9);
  });

  y += 28;

  // Category breakdown
  doc.setFontSize(11); doc.setFont("helvetica","bold"); doc.setTextColor(13,17,23);
  doc.text(T("pdfCatBreakdown"), M, y); y += 6;
  doc.setDrawColor(225,228,235); doc.line(M, y, W-M, y); y += 6;

  const expOnly = txs.filter(t => t.type==="EXPENSE");
  const catMap = {};
  expOnly.forEach(t => catMap[t.category] = (catMap[t.category]||0)+t.amount);
  Object.entries(catMap).sort((a,b) => b[1]-a[1]).slice(0,8).forEach(([cat, amt]) => {
    const catObj = state.cats.find(c => c.name === cat);
    const pct = expense > 0 ? ((amt/expense)*100).toFixed(1) : 0;
    doc.setFontSize(9); doc.setFont("helvetica","normal"); doc.setTextColor(40,50,70);
    doc.text(`${cat}`, M, y);
    doc.text(fmtFull(amt), W-M-30, y);
    doc.text(`%${pct}`, W-M-5, y, { align: "right" });

    // mini bar
    const barX = M+35, barW = W-M*2-70, barH = 3;
    doc.setFillColor(230,233,240); doc.roundedRect(barX, y-3, barW, barH, 1, 1, "F");
    if (catObj) {
      const hex = catObj.color;
      const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
      doc.setFillColor(r, g, b);
    } else { doc.setFillColor(79,110,247); }
    doc.roundedRect(barX, y-3, barW*(Math.min(pct,100)/100), barH, 1, 1, "F");
    y += 8;
    if (y > 240) { doc.addPage(); y = 20; }
  });

  y += 4;

  // Transactions
  doc.setFontSize(11); doc.setFont("helvetica","bold"); doc.setTextColor(13,17,23);
  doc.text(T("pdfTransactions"), M, y); y += 6;
  doc.setDrawColor(225,228,235); doc.line(M, y, W-M, y); y += 6;

  const colW = { date: 24, desc: 64, cat: 34, type: 18, amt: 30 };
  doc.setFontSize(8); doc.setFont("helvetica","bold"); doc.setTextColor(120,130,150);
  doc.text(T("pdfDate"), M, y);
  doc.text(T("pdfDesc"), M+colW.date, y);
  doc.text(T("pdfCat"), M+colW.date+colW.desc, y);
  doc.text(T("pdfType"), M+colW.date+colW.desc+colW.cat, y);
  doc.text(T("pdfAmount"), W-M, y, { align:"right" }); y += 6;
  doc.line(M, y, W-M, y); y += 4;

  txs.slice(0, 40).forEach(t => {
    if (y > 270) { doc.addPage(); y = 20; }
    const isInc = t.type === "INCOME";
    doc.setFontSize(8); doc.setFont("helvetica","normal"); doc.setTextColor(40,50,70);
    doc.text(t.date, M, y);
    const descTrunc = t.desc.length > 38 ? t.desc.slice(0,35)+"..." : t.desc;
    doc.text(descTrunc, M+colW.date, y);
    doc.text(t.category.slice(0,16), M+colW.date+colW.desc, y);
    doc.setTextColor(isInc ? 16 : 240, isInc ? 183 : 76, isInc ? 127 : 101);
    doc.text(isInc ? T("fOptIncome") : T("fOptExpense"), M+colW.date+colW.desc+colW.cat, y);
    doc.setTextColor(isInc ? 16 : 240, isInc ? 183 : 76, isInc ? 127 : 101);
    doc.text(fmtFull(t.amount), W-M, y, { align:"right" });
    y += 7;
  });

  if (txs.length > 40) {
    doc.setFontSize(8); doc.setTextColor(120,130,150);
    doc.text(`... ve ${txs.length-40} işlem daha`, M, y+4);
  }

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i); doc.setFontSize(8); doc.setTextColor(160,170,190);
    doc.text(`BütçeDostu v2 — ${new Date().toLocaleDateString()}  |  ${i}/${pageCount}`, W/2, 290, { align:"center" });
  }

  doc.save(`finansal-ozet-${monthKey(state.currentDate)}.pdf`);
  toast(T("exportedOk"), "success");
}

function importData(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.users || !data.transactions || !data.customCategories) return toast(T("invalidFile"), "error");
      if (!confirm(T("overwriteConfirm"))) return;
      state.users = data.users; state.txs = data.transactions; state.cats = data.customCategories;
      state.activeId = data.activeUserId || data.users[0]?.id;
      saveState(); renderAll(); closeModal("settingsModal"); toast(T("importedOk"), "success");
    } catch { toast(T("invalidFile"), "error"); }
    finally { e.target.value = ""; }
  };
  reader.readAsText(file);
}

// ─────────────────────────────────────────────────
// RENDER ALL
// ─────────────────────────────────────────────────
function _renderAllBase() {
  applyLang();
  document.getElementById("monthLabel").textContent = getMonthLabel(state.currentDate);
  renderUsers();
  renderCatSelect(); renderCatFilter(); renderCatMini();

  const monthly = currentMonthTxs();
  const prev = prevMonthTxs();

  renderStats(monthly, prev);
  renderBudgetGoal(monthly);
  renderCatAnalysis(monthly);
  renderDailyChart(monthly);
  renderComparisonChart();
  renderYearlyChart();
  renderTxList();
}

// ─────────────────────────────────────────────────
// MOBILE: BOTTOM NAV PAGE SWITCHING
// ─────────────────────────────────────────────────
let activeMobPage = "overview";

function isMobile() { return window.innerWidth <= 768; }

function switchMobPage(page, btn) {
  activeMobPage = page;

  // Update nav button states
  document.querySelectorAll(".bnav-item").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  // On mobile: show/hide sections
  if (isMobile()) {
    applyMobPageVisibility();
    // Re-render charts when switching to analysis tab (canvas needs visible container)
    if (page === "analysis") {
      setTimeout(() => {
        renderDailyChart(currentMonthTxs());
        renderComparisonChart();
        renderYearlyChart();
      }, 50);
    }
  }

  // Haptic feedback on supported devices
  if (navigator.vibrate) navigator.vibrate(8);

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Render new pages if needed
  if (page === "report") setTimeout(renderReportPage, 60);
  if (page === "plan") setTimeout(renderPlanPage, 60);
}

function applyMobPageVisibility() {
  const mobile = isMobile();
  const allPages = ["overview", "transactions", "analysis", "settings-page", "report", "plan"];

  if (!mobile) {
    // ── DESKTOP: report/plan toggle via _activeDesktopExtra, others always shown ──
    allPages.forEach(p => {
      const el = document.getElementById(`mob-${p}`);
      if (!el) return;
      if (p === "settings-page") {
        el.style.display = "none";
      } else if (p === "report" || p === "plan") {
        el.style.display = (typeof _activeDesktopExtra !== "undefined" && _activeDesktopExtra === p) ? "" : "none";
      } else {
        el.style.display = (typeof _activeDesktopExtra === "undefined" || _activeDesktopExtra === null) ? "" : "none";
      }
    });
    const ac = document.getElementById("mob-analysis-cat");
    if (ac) ac.style.display = (typeof _activeDesktopExtra === "undefined" || _activeDesktopExtra === null) ? "" : "none";
    const fab = document.getElementById("fabBtn");
    if (fab) fab.style.display = "none";
    // Highlight active desktop nav buttons + show/hide home btn
    const reportBtn = document.getElementById("reportBtn");
    const planBtn = document.getElementById("planBtn");
    const homeBtn = document.getElementById("homeBtn");
    const isExtra = typeof _activeDesktopExtra !== "undefined" && _activeDesktopExtra !== null;

    if (reportBtn) {
      const active = isExtra && _activeDesktopExtra === "report";
      reportBtn.style.background = active ? "var(--accent)" : "";
      reportBtn.style.color = active ? "white" : "";
      reportBtn.style.borderColor = active ? "var(--accent)" : "";
    }
    if (planBtn) {
      const active = isExtra && _activeDesktopExtra === "plan";
      planBtn.style.background = active ? "var(--accent)" : "";
      planBtn.style.color = active ? "white" : "";
      planBtn.style.borderColor = active ? "var(--accent)" : "";
    }
    if (homeBtn) homeBtn.style.display = isExtra ? "" : "none";
    return;
  }

  // ── MOBILE: only active page visible ──
  allPages.forEach(p => {
    const el = document.getElementById(`mob-${p}`);
    if (el) el.style.display = (p === activeMobPage) ? "block" : "none";
  });
  const ac = document.getElementById("mob-analysis-cat");
  if (ac) ac.style.display = (activeMobPage === "analysis") ? "block" : "none";
  const fab = document.getElementById("fabBtn");
  if (fab) fab.style.display = (activeMobPage === "overview" || activeMobPage === "transactions") ? "flex" : "none";
  const mtb = document.getElementById("mobThemeBtn");
  if (mtb) mtb.textContent = state.dark ? "☀️ Light" : "🌙 Dark";
}

// ─────────────────────────────────────────────────
// MOBILE: BOTTOM SHEET (add/edit form)
// ─────────────────────────────────────────────────
let sheetEditId = null;

function openAddSheet() {
  sheetEditId = null;
  document.getElementById("sheetEditBanner").style.display = "none";
  document.getElementById("shNormalBtns").style.display = "";
  document.getElementById("shEditBtns").style.display = "none";
  document.getElementById("sheetTitle").textContent = tx("Yeni İşlem", "New Transaction", "Neue Transaktion", "Nueva transacción");

  // Sync category select
  const shCat = document.getElementById("shCat"); shCat.innerHTML = "";
  state.cats.forEach(c => shCat.innerHTML += `<option value="${c.name}">${c.name}</option>`);

  // Reset sheet form
  document.getElementById("shDesc").value = "";
  document.getElementById("shAmount").value = "";
  document.getElementById("shTags").value = "";
  document.getElementById("shDate").value = new Date().toISOString().split("T")[0];

  // Sync type buttons
  const se = document.getElementById("shExpBtn"), si = document.getElementById("shIncBtn");
  se.classList.add("active"); si.classList.remove("active");

  document.getElementById("sheetOverlay").classList.add("open");
  setTimeout(() => document.getElementById("addSheet").classList.add("open"), 10);
  document.getElementById("shDesc").focus();
  if (navigator.vibrate) navigator.vibrate(10);
}

function openEditSheet(id) {
  const tx = state.txs.find(t => t.id === id); if (!tx) return;
  sheetEditId = id;

  const shCat = document.getElementById("shCat"); shCat.innerHTML = "";
  state.cats.forEach(c => shCat.innerHTML += `<option value="${c.name}">${c.name}</option>`);

  document.getElementById("shDesc").value = tx.desc;
  document.getElementById("shAmount").value = tx.amount;
  document.getElementById("shDate").value = tx.date;
  document.getElementById("shCat").value = tx.category;
  document.getElementById("shTags").value = (tx.tags||[]).join(", ");
  const shNoteEl = document.getElementById("shNote");
  if (shNoteEl) shNoteEl.value = tx.note || "";

  const se = document.getElementById("shExpBtn"), si = document.getElementById("shIncBtn");
  if (tx.type === "INCOME") { si.classList.add("active"); se.classList.remove("active"); }
  else { se.classList.add("active"); si.classList.remove("active"); }
  state.currentType = tx.type;

  document.getElementById("sheetEditBanner").style.display = "block";
  document.getElementById("shNormalBtns").style.display = "none";
  document.getElementById("shEditBtns").style.display = "grid";
  document.getElementById("sheetTitle").textContent = tx("İşlemi Düzenle", "Edit Transaction", "Transaktion bearbeiten", "Editar transacción");

  document.getElementById("sheetOverlay").classList.add("open");
  setTimeout(() => document.getElementById("addSheet").classList.add("open"), 10);
  if (navigator.vibrate) navigator.vibrate(10);
}

function closeAddSheet() {
  document.getElementById("addSheet").classList.remove("open");
  document.getElementById("sheetOverlay").classList.remove("open");
  sheetEditId = null;
}



// Sheet type toggle syncs with main type
document.getElementById("shExpBtn").addEventListener("click", () => {
  document.getElementById("shExpBtn").classList.add("active");
  document.getElementById("shIncBtn").classList.remove("active");
  state.currentType = "EXPENSE";
});
document.getElementById("shIncBtn").addEventListener("click", () => {
  document.getElementById("shIncBtn").classList.add("active");
  document.getElementById("shExpBtn").classList.remove("active");
  state.currentType = "INCOME";
});

// Sheet drag-to-close
(function() {
  const sheet = document.getElementById("addSheet");
  let startY = 0, isDragging = false;

  sheet.addEventListener("touchstart", e => {
    // Only drag from handle
    if (e.target.closest(".sheet-handle")) { startY = e.touches[0].clientY; isDragging = true; }
  }, { passive: true });

  sheet.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const dy = e.touches[0].clientY - startY;
    if (dy > 0) sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  sheet.addEventListener("touchend", e => {
    if (!isDragging) return;
    isDragging = false;
    const dy = e.changedTouches[0].clientY - startY;
    if (dy > 100) { closeAddSheet(); }
    sheet.style.transform = "";
  });
})();

// ─────────────────────────────────────────────────
// MOBILE: SWIPE-TO-DELETE on transactions
// ─────────────────────────────────────────────────
function attachSwipeDelete(itemEl, txId) {
  let startX = 0, currentX = 0, swiping = false;
  const threshold = 80;

  itemEl.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    currentX = startX;
    swiping = false;
  }, { passive: true });

  itemEl.addEventListener("touchmove", e => {
    currentX = e.touches[0].clientX;
    const dx = startX - currentX;
    if (dx > 10) {
      swiping = true;
      const clamped = Math.min(dx, threshold + 20);
      itemEl.style.transform = `translateX(-${clamped}px)`;
      itemEl.style.transition = "none";
    }
  }, { passive: true });

  itemEl.addEventListener("touchend", () => {
    if (!swiping) return;
    itemEl.style.transition = "transform 0.25s ease";
    const dx = startX - currentX;
    if (dx >= threshold) {
      // Confirm delete with vibration
      if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
      itemEl.style.transform = `translateX(-100%)`;
      itemEl.style.opacity = "0";
      setTimeout(() => {
        state.txs = state.txs.filter(t => t.id !== txId);
        saveState(); renderAll(); toast(T("deletedOk"), "info");
      }, 220);
    } else {
      itemEl.style.transform = "";
    }
    swiping = false;
  });
}

// Override renderTxList: no-op (swipe handled in renderAll)
// ─────────────────────────────────────────────────
// MOBILE: import file2 handler
// ─────────────────────────────────────────────────
const importFile2el = document.getElementById("importFile2");
if (importFile2el) importFile2el.addEventListener("change", importData);

// ─────────────────────────────────────────────────
// MOBILE: lang/theme button sync
// ─────────────────────────────────────────────────
function syncMobLangBtn() {
  const mb = document.getElementById("mobLangBtn");
  if (mb) mb.textContent = state.lang.toUpperCase();
  const mtb = document.getElementById("mobThemeBtn");
  if (mtb) mtb.textContent = state.dark ? "☀️ Light" : "🌙 Dark";
}

// ─────────────────────────────────────────────────
// RENDER ALL — single unified function
// ─────────────────────────────────────────────────
function renderAll() {
  _renderAllBase();
  applyMobPageVisibility();
  syncMobLangBtn();

  // Currency grid in settings
  renderCurrencyGrid();

  // Tx-level currency selects
  renderTxCurrencySelects();

  // Anomaly detection
  detectAnomalies();

  // Reminders list + bell badge
  renderReminderList();

  // Notification permission status
  if ('Notification' in window) {
    const s = document.getElementById('notifStatus');
    if (s && !s.textContent) s.textContent =
      Notification.permission === 'granted' ? '✅ Bildirim izni var' :
      Notification.permission === 'denied'  ? '🚫 İzin reddedildi' : '';
    const btn = document.getElementById('notifPermBtn');
    if (btn && Notification.permission === 'granted') btn.textContent = '✅ İzin Verildi';
  }

  // PIN settings button label
  const pinBtn = document.getElementById('pinSettingsBtn');
  if (pinBtn) pinBtn.textContent = (state.pinEnabled && state.pin) ? '🔐 PIN Kaldır / Değiştir' : '🔐 PIN Ayarla';

  // Report / Plan pages if visible
  renderReportPage();
  renderPlanPage();

  // Sync bottom sheet cat select
  const shCat = document.getElementById("shCat");
  if (shCat) {
    shCat.innerHTML = "";
    state.cats.forEach(c => shCat.innerHTML += `<option value="${c.name}">${c.name}</option>`);
  }

  // Attach swipe-to-delete on mobile
  if (isMobile()) {
    setTimeout(() => {
      document.querySelectorAll(".tx-item[data-txid]").forEach(el => {
        if (!el._swipeAttached) {
          el._swipeAttached = true;
          attachSwipeDelete(el, el.dataset.txid);
        }
      });
    }, 50);
  }
}

// ─────────────────────────────────────────────────
// MOBILE: SWIPE LEFT/RIGHT between pages
// ─────────────────────────────────────────────────
(function() {
  const pages = ["overview", "transactions", "analysis", "settings-page"];
  let touchStartX = 0, touchStartY = 0;

  document.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", e => {
    if (!isMobile()) return;
    // Don't interfere with sheet or sidebar
    if (document.getElementById("addSheet").classList.contains("open")) return;
    if (document.getElementById("sidebar").classList.contains("open")) return;

    const dx = touchStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);

    // Only horizontal swipes (dx > dy) with enough distance
    if (Math.abs(dx) < 60 || dy > 80) return;

    const idx = pages.indexOf(activeMobPage);
    if (dx > 0 && idx < pages.length - 1) {
      // Swipe left → next page
      const nextPage = pages[idx + 1];
      const nextBtn = document.querySelector(`[data-page="${nextPage}"]`);
      switchMobPage(nextPage, nextBtn);
    } else if (dx < 0 && idx > 0) {
      // Swipe right → prev page
      const prevPage = pages[idx - 1];
      const prevBtn = document.querySelector(`[data-page="${prevPage}"]`);
      switchMobPage(prevPage, prevBtn);
    }
  }, { passive: true });
})();

// ─────────────────────────────────────────────────
// CURRENCIES
// ─────────────────────────────────────────────────
const CURRENCIES = [
  { code: "TRY", symbol: "₺", label: "Türk Lirası" },
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "GBP", symbol: "£", label: "Pound" },
  { code: "JPY", symbol: "¥", label: "Japanese Yen" },
  { code: "CHF", symbol: "₣", label: "Swiss Franc" },
  { code: "CAD", symbol: "C$", label: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", label: "Australian Dollar" },
  { code: "SAR", symbol: "﷼", label: "Saudi Riyal" },
];

function renderCurrencyGrid() {
  const grid = document.getElementById("currencyGrid");
  if (!grid) return;
  grid.innerHTML = "";
  CURRENCIES.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "currency-opt" + (state.currency === c.code ? " active" : "");
    btn.innerHTML = `<div style="font-size:16px;">${c.symbol}</div><div>${c.code}</div>`;
    btn.title = c.label;
    btn.onclick = () => {
      state.currency = c.code;
      saveState();
      renderCurrencyGrid();
      renderAll();
      toast(`Para birimi: ${c.code} ${c.symbol}`, "success");
    };
    grid.appendChild(btn);
  });
}

// ─────────────────────────────────────────────────
// NOTE — patch tx pushes to include note field
// ─────────────────────────────────────────────────
// Override renderTxList to search notes too
// Patch submitTx and related — inject note into the most recently pushed tx
function getNoteValue(desktopId, sheetId) {
  const dEl = document.getElementById(desktopId);
  const sEl = document.getElementById(sheetId);
  if (dEl && dEl.value.trim()) return dEl.value.trim();
  if (sEl && sEl.value.trim()) return sEl.value.trim();
  return "";
}

// Override submitTx to attach note to last pushed tx(s)
// Re-define submitTx properly

// Patch updateTx with note
function updateTx() {
  const desc = document.getElementById("fDesc").value.trim();
  const amount = parseFloat(document.getElementById("fAmount").value);
  const date = document.getElementById("fDate").value;
  const cat = document.getElementById("fCat").value;
  const tags = document.getElementById("fTags").value.split(",").map(t => t.trim()).filter(Boolean);
  const note = document.getElementById("fNote")?.value.trim() || "";
  if (!desc || !amount || amount <= 0 || !date || !cat) return toast(T("fillFields"), "error");
  state.txs = state.txs.map(t => t.id === state.editId
    ? {...t, desc, amount, date, category: cat, tags, note, type: state.currentType} : t);
  saveState(); cancelEdit(); renderAll(); toast(T("updatedOk"), "success");
  checkBudgetAlert(cat); checkMonthlyGoalAlert();
}

// Patch startEdit to populate note
function startEdit(id) {
  if (typeof isMobile === 'function' && isMobile()) {
    openEditSheet(id); return;
  }
  const tx = state.txs.find(t => t.id === id); if (!tx) return;
  state.editId = id; state.currentType = tx.type; setType(tx.type);
  document.getElementById("fDesc").value = tx.desc;
  document.getElementById("fAmount").value = tx.amount;
  document.getElementById("fDate").value = tx.date;
  renderCatSelect();
  document.getElementById("fCat").value = tx.category;
  document.getElementById("fTags").value = (tx.tags||[]).join(", ");
  const noteEl = document.getElementById("fNote");
  if (noteEl) noteEl.value = tx.note || "";
  document.getElementById("editBanner").style.display = "block";
  document.getElementById("editBanner").textContent = T("editModeBanner");
  document.getElementById("normalBtns").style.display = "none";
  document.getElementById("editBtns").style.display = "grid";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Patch sheet tx functions with note

function updateSheetTx() {
  const desc = document.getElementById("shDesc").value.trim();
  const amount = parseFloat(document.getElementById("shAmount").value);
  const date = document.getElementById("shDate").value;
  const cat = document.getElementById("shCat").value;
  const tags = document.getElementById("shTags").value.split(",").map(t => t.trim()).filter(Boolean);
  const note = document.getElementById("shNote")?.value.trim() || "";
  const type = document.getElementById("shExpBtn").classList.contains("active") ? "EXPENSE" : "INCOME";

  if (!desc || !amount || amount <= 0 || !date || !cat) return toast(T("fillFields"), "error");
  state.txs = state.txs.map(t => t.id === sheetEditId
    ? {...t, desc, amount, date, category: cat, tags, note, type} : t);
  saveState(); renderAll(); closeAddSheet(); toast(T("updatedOk"), "success");
}

// Patch openEditSheet to fill note

// ─────────────────────────────────────────────────
// PWA — Service Worker + Install Prompt
// ─────────────────────────────────────────────────
let deferredInstallPrompt = null;

// SW registration — only works when served over http/https (not blob/preview)
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  // Only register in real deployment context (not blob preview)
  const proto = location.protocol;
  if (proto !== 'http:' && proto !== 'https:') {
    console.log('SW skipped: preview environment');
    return;
  }
  // Inline SW as blob — works on real http/https hosting
  const swCode = `
    const CACHE = 'butce-dostu-v3';
    self.addEventListener('install', e => { self.skipWaiting(); });
    self.addEventListener('activate', e => { self.clients.claim(); });
    self.addEventListener('fetch', e => {
      if (e.request.method !== 'GET') return;
      e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    });
  `;
  try {
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);
    navigator.serviceWorker.register(swUrl)
      .then(reg => { console.log('SW registered ✓'); window._swReg = reg; })
      .catch(err => console.log('SW skipped:', err.message));
  } catch(e) { console.log('SW unavailable'); }
}

// PWA Manifest inject
function injectManifest() {
  const manifest = {
    name: "BütçeDostu",
    short_name: "BütçeDostu",
    description: "Kişisel bütçe takip uygulaması",
    start_url: "./",
    display: "standalone",
    background_color: state.dark ? "#080c14" : "#f0f2f8",
    theme_color: "#0d1117",
    orientation: "portrait-primary",
    icons: [
      { src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><text y='.9em' font-size='80' x='10'>💰</text></svg>", sizes: "192x192", type: "image/svg+xml" },
      { src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><text y='.9em' font-size='80' x='10'>💰</text></svg>", sizes: "512x512", type: "image/svg+xml" }
    ]
  };
  const blob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.getElementById('manifestLink');
  if (link) link.href = url;
}

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const banner = document.getElementById('pwaBanner');
  if (banner && !ls('pwa_dismissed', false)) banner.style.display = 'block';
});

window.addEventListener('appinstalled', () => {
  document.getElementById('pwaBanner').style.display = 'none';
  toast('Uygulama yüklendi! 🎉', 'success');
  deferredInstallPrompt = null;
});

function installPWA() {
  if (!deferredInstallPrompt) {
    toast(state.lang === 'tr'
      ? 'Tarayıcı menüsünden "Ana ekrana ekle" seçeneğini kullan.'
      : 'Use browser menu → "Add to Home Screen".', 'info');
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') toast('Kurulum başlatıldı ✓', 'success');
    deferredInstallPrompt = null;
  });
}

function dismissPWA() {
  document.getElementById('pwaBanner').style.display = 'none';
  ss('pwa_dismissed', true);
}

// ─────────────────────────────────────────────────
// NOTIFICATIONS & REMINDERS
// ─────────────────────────────────────────────────
function requestNotifPermission() {
  if (!('Notification' in window)) {
    updateNotifStatus('Bu tarayıcı bildirimleri desteklemiyor.'); return;
  }
  Notification.requestPermission().then(perm => {
    updateNotifStatus(perm === 'granted'
      ? '✅ Bildirim izni verildi'
      : perm === 'denied' ? '🚫 Bildirim izni reddedildi' : '⏸ Henüz karar verilmedi');
    const btn = document.getElementById('notifPermBtn');
    if (btn) btn.textContent = perm === 'granted' ? '✅ İzin Verildi' : '🔔 Bildirim İzni Ver';
  });
}

function updateNotifStatus(msg) {
  const el = document.getElementById('notifStatus');
  if (el) el.textContent = msg;
}

function sendNotification(title, body, icon = '💰') {
  if (Notification.permission !== 'granted') return;
  if ('serviceWorker' in navigator && window._swReg) {
    window._swReg.showNotification(title, { body, icon });
  } else {
    new Notification(title, { body, icon });
  }
}

function addReminder() {
  const title = document.getElementById('remTitle').value.trim();
  const date = document.getElementById('remDate').value;
  const time = document.getElementById('remTime').value || '09:00';
  const repeat = document.getElementById('remRepeat').value;

  if (!title || !date) return toast('Başlık ve tarih gir.', 'error');

  const reminder = {
    id: uid(), title, date, time, repeat,
    createdAt: new Date().toISOString(),
    active: true
  };
  state.reminders.push(reminder);
  saveState();
  scheduleReminder(reminder);
  renderReminderList();
  document.getElementById('remTitle').value = '';
  document.getElementById('remDate').value = '';
  toast('Hatırlatıcı eklendi ✓', 'success');
}

function scheduleReminder(reminder) {
  const targetTime = new Date(`${reminder.date}T${reminder.time}`).getTime();
  const now = Date.now();
  const delay = targetTime - now;
  if (delay > 0 && delay < 7 * 24 * 60 * 60 * 1000) {
    setTimeout(() => {
      sendNotification('🔔 ' + reminder.title, `BütçeDostu hatırlatıcısı`);
      toast(`🔔 ${reminder.title}`, 'info');
    }, delay);
  }
}

function deleteReminder(id) {
  state.reminders = state.reminders.filter(r => r.id !== id);
  saveState(); renderReminderList();
  toast(T('deletedOk'), 'info');
}

function renderReminderList() {
  const list = document.getElementById('reminderList');
  if (!list) return;
  if (!state.reminders.length) {
    list.innerHTML = `<div class="empty-state" style="padding:16px;"><div class="empty-state-icon">🔕</div><div class="empty-state-text">${tx("Henüz hatırlatıcı yok", "No reminders yet", "Noch keine Erinnerungen", "Aún no hay recordatorios")}</div></div>`;
    return;
  }
  list.innerHTML = "";
  [...state.reminders].sort((a,b) => new Date(a.date+'T'+a.time) - new Date(b.date+'T'+b.time)).forEach(r => {
    const dt = new Date(r.date + 'T' + r.time);
    const isPast = dt < new Date();
    const item = document.createElement('div');
    item.className = 'reminder-item';
    item.style.opacity = isPast ? '0.5' : '1';
    const repeatMap = { once: '1x', daily: '↻ Gün', weekly: '↻ Hafta', monthly: '↻ Ay' };
    item.innerHTML = `
      <div class="reminder-icon">🔔</div>
      <div class="reminder-body">
        <div class="reminder-title">${r.title}</div>
        <div class="reminder-time">${dt.toLocaleDateString(localeByLang(state.lang))} ${r.time} · ${repeatMap[r.repeat] || r.repeat}</div>
      </div>
      <button class="reminder-del" onclick="deleteReminder('${r.id}')">×</button>
    `;
    list.appendChild(item);
  });

  // Update bell badge
  const upcoming = state.reminders.filter(r => new Date(r.date+'T'+r.time) > new Date());
  const badge = document.getElementById('notifBellBadge');
  if (badge) { badge.style.display = upcoming.length ? 'flex' : 'none'; badge.textContent = upcoming.length > 9 ? '9+' : upcoming.length; }
}

function checkDueReminders() {
  const now = new Date();
  state.reminders.forEach(r => {
    if (!r.active) return;
    const dt = new Date(r.date + 'T' + r.time);
    const diff = Math.abs(now - dt);
    if (diff < 60000) {
      sendNotification('🔔 ' + r.title, 'BütçeDostu hatırlatıcısı');
      if (r.repeat === 'once') {
        r.active = false;
      } else if (r.repeat === 'daily') {
        const next = new Date(dt); next.setDate(next.getDate() + 1);
        r.date = next.toISOString().split('T')[0];
      } else if (r.repeat === 'weekly') {
        const next = new Date(dt); next.setDate(next.getDate() + 7);
        r.date = next.toISOString().split('T')[0];
      } else if (r.repeat === 'monthly') {
        const next = new Date(dt); next.setMonth(next.getMonth() + 1);
        r.date = next.toISOString().split('T')[0];
      }
      saveState();
    }
  });
}

// Check reminders every minute
setInterval(checkDueReminders, 60000);

// ─────────────────────────────────────────────────
// CHART ANIMATIONS — patch chart options
// ─────────────────────────────────────────────────

// ─────────────────────────────────────────────────
// PATCH renderAll to include new features
// ─────────────────────────────────────────────────

// ─────────────────────────────────────────────────
// FINANCIAL REPORT PAGE
// ─────────────────────────────────────────────────
function renderReportPage() {
  const el = document.getElementById("mob-report");
  if (!el || el.style.display === "none") return;

  const rangeEl = document.getElementById("reportRangeSelect");
  const months = rangeEl ? parseInt(rangeEl.value) || 6 : 6;

  // Build array of { year, month } for last N months (newest last)
  const monthList = [];
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() - i, 1);
    monthList.push({ year: d.getFullYear(), month: d.getMonth(), date: d });
  }

  // Gather txs per month
  const monthData = monthList.map(m => {
    const txs = getMonthTxs(state.activeId, m.year, m.month);
    const income = txs.filter(t => t.type === "INCOME").reduce((s, t) => s + t.amount, 0);
    const expense = txs.filter(t => t.type === "EXPENSE").reduce((s, t) => s + t.amount, 0);
    return { ...m, txs, income, expense, net: income - expense };
  });

  const totalIncome = monthData.reduce((s, m) => s + m.income, 0);
  const totalExpense = monthData.reduce((s, m) => s + m.expense, 0);
  const netBalance = totalIncome - totalExpense;
  const savingRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;

  // Highest expense month
  const maxExpMonth = monthData.reduce((best, m) => m.expense > best.expense ? m : best, monthData[0] || { expense: 0, date: new Date() });
  const maxExpMonthLabel = maxExpMonth && maxExpMonth.date ? maxExpMonth.date.toLocaleDateString(localeByLang(state.lang), { month: "short", year: "2-digit" }) : "—";

  const avgMonthlyExpense = months > 0 ? totalExpense / months : 0;

  // ── KPI cards ──
  const kpiBox = document.getElementById("reportKPIs");
  if (kpiBox) {
    const kpis = [
      { icon: "💰", val: fmt(totalIncome), lbl: tx("Toplam Gelir", "Total Income", "Gesamteinnahmen", "Ingreso Total"), color: "var(--green)" },
      { icon: "💸", val: fmt(totalExpense), lbl: tx("Toplam Gider", "Total Expense", "Gesamtausgaben", "Gasto Total"), color: "var(--red)" },
      { icon: "📊", val: fmt(netBalance), lbl: tx("Net Bakiye", "Net Balance", "Nettostand", "Balance Neto"), color: netBalance >= 0 ? "var(--accent)" : "var(--red)" },
      { icon: "🎯", val: `%${savingRate}`, lbl: tx("Tasarruf Oranı", "Saving Rate", "Sparquote", "Tasa de Ahorro"), color: savingRate >= 20 ? "var(--green)" : savingRate >= 0 ? "var(--amber)" : "var(--red)" },
      { icon: "📅", val: maxExpMonthLabel, lbl: tx("En Yüksek Gider Ayı", "Highest Expense Month", "Monat mit höchsten Ausgaben", "Mes con mayor gasto"), color: "var(--amber)" },
      { icon: "📉", val: fmt(avgMonthlyExpense), lbl: tx("Aylık Ort. Gider", "Avg Monthly Expense", "Monatl. Durchschnittsausgabe", "Gasto mensual promedio"), color: "var(--purple)" },
    ];
    kpiBox.innerHTML = kpis.map(k => `
      <div class="report-kpi">
        <div class="report-kpi-icon">${k.icon}</div>
        <div class="report-kpi-val" style="color:${k.color}">${k.val}</div>
        <div class="report-kpi-lbl">${k.lbl}</div>
        <div class="report-kpi-bar" style="background:${k.color};opacity:0.35;"></div>
      </div>`).join("");
  }

  // ── Category table ──
  const catBody = document.getElementById("reportCatBody");
  if (catBody) {
    const allExpTxs = monthData.flatMap(m => m.txs.filter(t => t.type === "EXPENSE"));
    const grandExp = allExpTxs.reduce((s, t) => s + t.amount, 0);
    const catMap = {};
    allExpTxs.forEach(t => { catMap[t.category] = (catMap[t.category] || 0) + t.amount; });
    const sorted = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) {
      catBody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--muted);">${tx("Veri yok", "No data", "Keine Daten", "Sin datos")}</td></tr>`;
    } else {
      catBody.innerHTML = sorted.map(([cat, total]) => {
        const catObj = state.cats.find(c => c.name === cat);
        const pct = grandExp > 0 ? ((total / grandExp) * 100).toFixed(1) : 0;
        const avg = months > 0 ? total / months : 0;
        return `<tr>
          <td><span style="display:inline-flex;align-items:center;gap:6px;">
            <span style="width:9px;height:9px;border-radius:50%;background:${catObj ? catObj.color : "var(--muted)"};display:inline-block;"></span>${cat}
          </span></td>
          <td style="font-family:var(--mono);font-weight:700;">${fmt(total)}</td>
          <td style="font-family:var(--mono);color:var(--muted2);">${fmt(avg)}</td>
          <td><span class="stat-pill pill-blue">%${pct}</span></td>
        </tr>`;
      }).join("");
    }
  }

  // ── Monthly summary table ──
  const monthBody = document.getElementById("reportMonthBody");
  if (monthBody) {
    monthBody.innerHTML = monthData.map((m, i) => {
      const lbl = m.date.toLocaleDateString(localeByLang(state.lang), { month: "short", year: "2-digit" });
      const prev = monthData[i - 1];
      let trendHtml = "";
      if (prev) {
        if (m.expense > prev.expense) trendHtml = `<span class="trend-chip" style="background:var(--red-bg);color:var(--red);">↑ ${tx("arttı", "up", "gestiegen", "subió")}</span>`;
        else if (m.expense < prev.expense) trendHtml = `<span class="trend-chip" style="background:var(--green-bg);color:var(--green);">↓ ${tx("azaldı", "down", "gesunken", "bajó")}</span>`;
        else trendHtml = `<span class="trend-chip" style="background:var(--card2);color:var(--muted);">= ${tx("aynı", "same", "gleich", "igual")}</span>`;
      }
      const netColor = m.net >= 0 ? "var(--green)" : "var(--red)";
      return `<tr>
        <td style="font-weight:700;">${lbl}</td>
        <td style="font-family:var(--mono);color:var(--green);">${fmt(m.income)}</td>
        <td style="font-family:var(--mono);color:var(--red);">${fmt(m.expense)}</td>
        <td style="font-family:var(--mono);font-weight:700;color:${netColor};">${fmt(m.net)}</td>
        <td>${trendHtml}</td>
      </tr>`;
    }).join("");
  }
}

// ─────────────────────────────────────────────────
// BUDGET PLANNING PAGE
// ─────────────────────────────────────────────────
function planKey() {
  const next = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1, 1);
  return `${state.activeId}_${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function renderPlanPage() {
  const el = document.getElementById("mob-plan");
  if (!el || el.style.display === "none") return;

  const next = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1, 1);
  const nextLabel = next.toLocaleDateString(localeByLang(state.lang), { month: "long", year: "numeric" });
  const lblEl = document.getElementById("planMonthLabel");
  if (lblEl) lblEl.textContent = nextLabel;

  const key = planKey();
  const savedPlan = state.budgetPlans[key] || {};

  // Current month spending per category (for reference)
  const currentExp = currentMonthTxs().filter(t => t.type === "EXPENSE");
  const spentMap = {};
  currentExp.forEach(t => { spentMap[t.category] = (spentMap[t.category] || 0) + t.amount; });

  const grid = document.getElementById("planGrid");
  if (!grid) return;

  grid.innerHTML = state.cats.map(cat => {
    const budgeted = savedPlan[cat.name] || 0;
    const spent = spentMap[cat.name] || 0;
    const diff = budgeted - spent;
    const diffColor = diff >= 0 ? "var(--green)" : "var(--red)";
    const diffText = budgeted > 0 ? fmt(diff) : "—";
    return `<div class="plan-row">
      <div>
        <div class="plan-row-name">
          <span style="width:9px;height:9px;border-radius:50%;background:${cat.color};display:inline-block;flex-shrink:0;"></span>
          ${cat.name}
        </div>
        <div class="plan-row-sub">${tx("Bu ay:", "This month:", "Diesen Monat:", "Este mes:")} ${fmt(spent)}</div>
      </div>
      <input type="number" class="plan-input" data-cat="${cat.name}" value="${budgeted || ""}" placeholder="₺0" min="0" step="1" />
      <div class="plan-diff" style="color:${diffColor};">${diffText}</div>
    </div>`;
  }).join("");

  _updatePlanSummary();
}

function _updatePlanSummary() {
  const key = planKey();
  const savedPlan = state.budgetPlans[key] || {};
  const currentExp = currentMonthTxs().filter(t => t.type === "EXPENSE");
  const spentMap = {};
  currentExp.forEach(t => { spentMap[t.category] = (spentMap[t.category] || 0) + t.amount; });

  const grid = document.getElementById("planGrid");
  let totalBudget = 0, totalSpent = 0;
  if (grid) {
    grid.querySelectorAll(".plan-input").forEach(inp => {
      const v = parseFloat(inp.value) || 0;
      totalBudget += v;
    });
  } else {
    Object.values(savedPlan).forEach(v => { totalBudget += parseFloat(v) || 0; });
  }
  Object.values(spentMap).forEach(v => { totalSpent += v; });

  const totalLeft = totalBudget - totalSpent;
  const tbEl = document.getElementById("planTotalBudget");
  const tsEl = document.getElementById("planTotalSpent");
  const tlEl = document.getElementById("planTotalLeft");
  if (tbEl) tbEl.textContent = fmt(totalBudget);
  if (tsEl) tsEl.textContent = fmt(totalSpent);
  if (tlEl) { tlEl.textContent = fmt(totalLeft); tlEl.style.color = totalLeft >= 0 ? "white" : "var(--red)"; }
}

function saveBudgetPlan() {
  const key = planKey();
  const plan = {};
  const grid = document.getElementById("planGrid");
  if (!grid) return;
  grid.querySelectorAll(".plan-input").forEach(inp => {
    const cat = inp.dataset.cat;
    const val = parseFloat(inp.value) || 0;
    if (cat && val > 0) plan[cat] = val;
  });
  state.budgetPlans[key] = plan;
  saveState();
  _updatePlanSummary();
  toast(tx("Plan kaydedildi ✓", "Plan saved ✓", "Plan gespeichert ✓", "Plan guardado ✓"), "success");
}

// ─────────────────────────────────────────────────
// PIN PROTECTION
// ─────────────────────────────────────────────────
let _pinBuffer = "";

function hashPIN(pin) {
  // Simple reversible-enough hash: btoa of char codes XORed with a constant
  let result = 0;
  for (let i = 0; i < pin.length; i++) result = (result * 31 + pin.charCodeAt(i)) >>> 0;
  return result.toString(16);
}

function _updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById("pd" + i);
    if (dot) {
      dot.classList.toggle("filled", i < _pinBuffer.length);
      dot.classList.remove("error");
    }
  }
}

function pinPress(digit) {
  if (_pinBuffer.length >= 4) return;
  _pinBuffer += digit;
  _updatePinDots();
  if (_pinBuffer.length === 4) {
    setTimeout(() => {
      if (hashPIN(_pinBuffer) === state.pin) {
        unlockApp();
      } else {
        // Show error animation
        for (let i = 0; i < 4; i++) {
          const dot = document.getElementById("pd" + i);
          if (dot) { dot.classList.remove("filled"); dot.classList.add("error"); }
        }
        const errEl = document.getElementById("pinErrorMsg");
        if (errEl) errEl.textContent = tx("Yanlış PIN, tekrar dene", "Wrong PIN, try again", "Falsche PIN, erneut versuchen", "PIN incorrecto, inténtalo de nuevo");
        setTimeout(() => {
          _pinBuffer = "";
          _updatePinDots();
          const errEl2 = document.getElementById("pinErrorMsg");
          if (errEl2) errEl2.textContent = "";
        }, 900);
      }
    }, 120);
  }
}

function pinDel() {
  if (_pinBuffer.length > 0) {
    _pinBuffer = _pinBuffer.slice(0, -1);
    _updatePinDots();
  }
}

function pinForgot() {
  const msg = state.lang === "tr"
    ? "PIN'i sıfırlamak için 'SIFIRLA' yazın:"
    : "Type 'RESET' to clear your PIN:";
  const answer = prompt(msg);
  const expected = tx("SIFIRLA", "RESET", "RESET", "RESETEAR");
  if (answer && answer.trim().toUpperCase() === expected) {
    state.pin = null;
    state.pinEnabled = false;
    state.locked = false;
    saveState();
    const overlay = document.getElementById("pinOverlay");
    if (overlay) overlay.classList.remove("show");
    toast(tx("PIN kaldırıldı ✓", "PIN removed ✓", "PIN entfernt ✓", "PIN eliminado ✓"), "success");
  }
}

function lockApp() {
  state.locked = true;
  _pinBuffer = "";
  _updatePinDots();
  const errEl = document.getElementById("pinErrorMsg");
  if (errEl) errEl.textContent = "";
  const overlay = document.getElementById("pinOverlay");
  if (overlay) overlay.classList.add("show");
}

function unlockApp() {
  state.locked = false;
  _pinBuffer = "";
  const overlay = document.getElementById("pinOverlay");
  if (overlay) overlay.classList.remove("show");
  _updatePinDots();
}

function openPINSettings() {
  if (!state.pinEnabled || !state.pin) {
    // Setup mode
    const p1 = prompt(tx("Yeni 4 haneli PIN girin:", "Enter new 4-digit PIN:", "Neue 4-stellige PIN eingeben:", "Introduce un PIN nuevo de 4 dígitos:"));
    if (!p1 || !/^\d{4}$/.test(p1)) {
      if (p1 !== null) toast(tx("Geçersiz PIN. 4 rakam girin.", "Invalid PIN. Enter 4 digits.", "Ungültige PIN. 4 Ziffern eingeben.", "PIN inválido. Introduce 4 dígitos."), "error");
      return;
    }
    const p2 = prompt(tx("PIN'i tekrar girin:", "Confirm PIN:", "PIN bestätigen:", "Confirma el PIN:"));
    if (p2 !== p1) { toast(tx("PIN'ler eşleşmiyor.", "PINs do not match.", "PINs stimmen nicht überein.", "Los PIN no coinciden."), "error"); return; }
    state.pin = hashPIN(p1);
    state.pinEnabled = true;
    saveState();
    const btn = document.getElementById("pinSettingsBtn");
    if (btn) btn.textContent = "🔐 PIN Kaldır / Değiştir";
    toast(tx("PIN kuruldu ✓", "PIN set ✓", "PIN eingerichtet ✓", "PIN configurado ✓"), "success");
  } else {
    // Change / disable mode
    const action = prompt(state.lang === "tr"
      ? "1 = PIN değiştir, 2 = PIN kaldır. Seçin (1/2):"
      : "1 = Change PIN, 2 = Remove PIN. Choose (1/2):");
    if (action === "1") {
      const current = prompt(tx("Mevcut PIN'i girin:", "Enter current PIN:", "Aktuelle PIN eingeben:", "Introduce el PIN actual:"));
      if (!current || hashPIN(current) !== state.pin) { toast(tx("Yanlış mevcut PIN.", "Wrong current PIN.", "Falsche aktuelle PIN.", "PIN actual incorrecto."), "error"); return; }
      const p1 = prompt(tx("Yeni 4 haneli PIN girin:", "Enter new 4-digit PIN:", "Neue 4-stellige PIN eingeben:", "Introduce un PIN nuevo de 4 dígitos:"));
      if (!p1 || !/^\d{4}$/.test(p1)) { if (p1 !== null) toast(tx("Geçersiz PIN.", "Invalid PIN.", "Ungültige PIN.", "PIN inválido."), "error"); return; }
      const p2 = prompt(tx("Yeni PIN'i tekrar girin:", "Confirm new PIN:", "Neue PIN bestätigen:", "Confirma el nuevo PIN:"));
      if (p2 !== p1) { toast(tx("PIN'ler eşleşmiyor.", "PINs do not match.", "PINs stimmen nicht überein.", "Los PIN no coinciden."), "error"); return; }
      state.pin = hashPIN(p1);
      saveState();
      toast(tx("PIN güncellendi ✓", "PIN updated ✓", "PIN aktualisiert ✓", "PIN actualizado ✓"), "success");
    } else if (action === "2") {
      state.pin = null;
      state.pinEnabled = false;
      saveState();
      const btn = document.getElementById("pinSettingsBtn");
      if (btn) btn.textContent = "🔐 PIN Ayarla";
      toast(tx("PIN kaldırıldı ✓", "PIN removed ✓", "PIN entfernt ✓", "PIN eliminado ✓"), "success");
    }
  }
}

// ─────────────────────────────────────────────────
// DESKTOP PAGE SWITCHING (report / plan)
// ─────────────────────────────────────────────────
let _activeDesktopExtra = null; // "report" | "plan" | null

function switchDesktopPage(page) {
  if (_activeDesktopExtra === page) {
    _activeDesktopExtra = null;
  } else {
    _activeDesktopExtra = page;
  }
  applyMobPageVisibility();
  if (_activeDesktopExtra === "report") renderReportPage();
  if (_activeDesktopExtra === "plan") renderPlanPage();
}

function goHome() {
  _activeDesktopExtra = null;
  applyMobPageVisibility();
}

// ─────────────────────────────────────────────────
// PAGE SWIPE — includes report & plan
// ─────────────────────────────────────────────────
(function() {
  const swipePages = ["overview", "transactions", "analysis", "report", "settings-page"];
  let _swStartX = 0, _swStartY = 0;

  document.addEventListener("touchstart", e => {
    _swStartX = e.touches[0].clientX;
    _swStartY = e.touches[0].clientY;
  }, { passive: true, capture: true });

  document.addEventListener("touchend", e => {
    if (!isMobile()) return;
    if (document.getElementById("addSheet").classList.contains("open")) return;
    if (document.getElementById("sidebar").classList.contains("open")) return;

    const dx = _swStartX - e.changedTouches[0].clientX;
    const dy = Math.abs(_swStartY - e.changedTouches[0].clientY);
    if (Math.abs(dx) < 60 || dy > 80) return;

    const idx = swipePages.indexOf(activeMobPage);
    if (dx > 0 && idx < swipePages.length - 1) {
      const np = swipePages[idx + 1];
      const nb = document.querySelector(`[data-page="${np}"]`);
      switchMobPage(np, nb);
      if (np === "report") { setTimeout(renderReportPage, 80); }
      if (np === "plan") { setTimeout(renderPlanPage, 80); }
    } else if (dx < 0 && idx > 0) {
      const pp = swipePages[idx - 1];
      const pb = document.querySelector(`[data-page="${pp}"]`);
      switchMobPage(pp, pb);
      if (pp === "report") { setTimeout(renderReportPage, 80); }
      if (pp === "plan") { setTimeout(renderPlanPage, 80); }
    }
  }, { passive: true, capture: true });
})();

// ─────────────────────────────────────────────────
// INIT — new features
// ─────────────────────────────────────────────────
registerServiceWorker();
injectManifest();

// Schedule existing reminders on load
state.reminders.forEach(r => { if (r.active !== false) scheduleReminder(r); });

// Set reminder date default
const remDateEl = document.getElementById('remDate');
if (remDateEl) remDateEl.value = new Date().toISOString().split('T')[0];

// ─────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────
document.getElementById("searchInput").addEventListener("input", renderAll);
document.getElementById("importFile").addEventListener("change", importData);

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeSidebar();
  applyMobPageVisibility();
});

applyTheme();
document.getElementById("fDate").value = new Date().toISOString().split("T")[0];
document.getElementById("shDate").value = new Date().toISOString().split("T")[0];
setType("EXPENSE");
renderAll();

// Show PIN lock on startup if enabled
if (state.pinEnabled && state.pin) {
  lockApp();
}

// ─────────────────────────────────────────────────
// TX-LEVEL CURRENCY SELECTOR
// ─────────────────────────────────────────────────
function renderTxCurrencySelects() {
  ["fTxCurrency", "shTxCurrency"].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const cur = sel.value || state.currency;
    sel.innerHTML = CURRENCIES.map(c =>
      `<option value="${c.code}" ${c.code === cur ? "selected" : ""}>${c.code}</option>`
    ).join("");
  });
}

// Get converted amount to base currency (simplified: 1:1 if same, else show badge)
const EXCHANGE_RATES = {
  TRY: 1, USD: 38.5, EUR: 41.2, GBP: 48.3, JPY: 0.26,
  CHF: 42.8, CAD: 28.1, AUD: 24.7, SAR: 10.3
};

function toBaseCurrency(amount, fromCurrency) {
  const base = state.currency || "TRY";
  if (fromCurrency === base) return amount;
  const inTRY = amount * (EXCHANGE_RATES[fromCurrency] || 1);
  return inTRY / (EXCHANGE_RATES[base] || 1);
}

// Patch submitTx to include txCurrency
function submitTx() {
  const noteVal = document.getElementById("fNote")?.value.trim() || "";
  const txCur = document.getElementById("fTxCurrency")?.value || state.currency;
  const desc = document.getElementById("fDesc").value.trim();
  const amount = parseFloat(document.getElementById("fAmount").value);
  const date = document.getElementById("fDate").value;
  const cat = document.getElementById("fCat").value;
  const rawTags = document.getElementById("fTags").value;

  if (!state.cats.length) return toast(T("addCatFirst"), "error");
  if (!desc || !amount || amount <= 0 || !date || !cat) return toast(T("fillFields"), "error");

  const tags = rawTags.split(",").map(t => t.trim()).filter(Boolean);
  const au = getActiveUser();
  const isInst = document.getElementById("fInstall").checked;
  const isRecur = document.getElementById("fRecurring").checked;
  const convertedAmount = toBaseCurrency(amount, txCur);

  if (state.currentType === "EXPENSE" && isInst) {
    const count = parseInt(document.getElementById("instRange").value);
    const perMonth = +(convertedAmount / count).toFixed(2);
    const origPerMonth = +(amount / count).toFixed(2);
    const start = new Date(date);
    for (let i = 0; i < count; i++) {
      const d = new Date(start.getFullYear(), start.getMonth() + i, start.getDate());
      state.txs.push({ id: uid(), desc: `${desc} (${i+1}/${count})`, amount: perMonth,
        origAmount: origPerMonth, txCurrency: txCur,
        date: d.toISOString().split("T")[0], category: cat, type: "EXPENSE",
        userId: au.id, owner: au.name, tags, note: noteVal, isInstallment: true });
    }
    toast(`${count} ${T("instAddedTxt")}`, "success");
  } else if (isRecur) {
    const period = document.getElementById("recurPeriod").value;
    const endDateVal = document.getElementById("recurEnd").value;
    const endDate = endDateVal ? new Date(endDateVal) : null;
    const start = new Date(date);
    let count = 0, d = new Date(start);
    while (count < 120) {
      if (endDate && d > endDate) break;
      state.txs.push({ id: uid(), desc, amount: convertedAmount, origAmount: amount, txCurrency: txCur,
        date: d.toISOString().split("T")[0], category: cat, type: state.currentType,
        userId: au.id, owner: au.name, tags, note: noteVal, isRecurring: true, recurPeriod: period });
      count++;
      if (!endDate && count >= 12) break;
      if (period === "monthly") d = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
      else if (period === "weekly") d = new Date(d.getTime() + 7*86400000);
      else if (period === "yearly") d = new Date(d.getFullYear()+1, d.getMonth(), d.getDate());
    }
    toast(`${count} ${T("recurAddedTxt")}`, "success");
  } else {
    state.txs.push({ id: uid(), desc, amount: convertedAmount, origAmount: amount, txCurrency: txCur,
      date, category: cat, type: state.currentType,
      userId: au.id, owner: au.name, tags, note: noteVal });
    toast(T("savedOk"), "success");
  }
  saveState();
  document.getElementById("fNote").value = "";
  clearForm(); renderAll();
  checkBudgetAlert(cat); checkMonthlyGoalAlert();
}

// Patch sheet submit to include txCurrency
function submitSheetTx() {
  const desc = document.getElementById("shDesc").value.trim();
  const amount = parseFloat(document.getElementById("shAmount").value);
  const date = document.getElementById("shDate").value;
  const cat = document.getElementById("shCat").value;
  const tags = document.getElementById("shTags").value.split(",").map(t => t.trim()).filter(Boolean);
  const note = document.getElementById("shNote")?.value.trim() || "";
  const txCur = document.getElementById("shTxCurrency")?.value || state.currency;
  const type = document.getElementById("shExpBtn").classList.contains("active") ? "EXPENSE" : "INCOME";

  if (!state.cats.length) return toast(T("addCatFirst"), "error");
  if (!desc || !amount || amount <= 0 || !date || !cat) return toast(T("fillFields"), "error");

  const au = getActiveUser();
  const convertedAmount = toBaseCurrency(amount, txCur);
  state.txs.push({ id: uid(), desc, amount: convertedAmount, origAmount: amount, txCurrency: txCur,
    date, category: cat, type, userId: au.id, owner: au.name, tags, note });
  saveState(); renderAll(); closeAddSheet(); toast(T("savedOk"), "success");
  if (navigator.vibrate) navigator.vibrate([10, 30, 10]);
  checkBudgetAlert(cat); checkMonthlyGoalAlert();
}

// Show original currency badge in tx list

// ─────────────────────────────────────────────────
// ANOMALY DETECTION
// ─────────────────────────────────────────────────
function detectAnomalies() {
  const banner = document.getElementById("anomalyBanner");
  const list = document.getElementById("anomalyList");
  if (!banner || !list) return;

  const monthly = currentMonthTxs();
  const expenses = monthly.filter(t => t.type === "EXPENSE");
  if (!expenses.length) { banner.classList.remove("show"); return; }

  // Build 3-month average per category
  const anomalies = [];
  state.cats.forEach(cat => {
    const thisMonthSpent = expenses.filter(t => t.category === cat.name).reduce((s,t) => s+t.amount, 0);
    if (thisMonthSpent === 0) return;

    let prevTotal = 0, prevMonths = 0;
    for (let i = 1; i <= 3; i++) {
      const d = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() - i, 1);
      const prevTxs = getMonthTxs(state.activeId, d.getFullYear(), d.getMonth());
      const prevSpent = prevTxs.filter(t => t.type === "EXPENSE" && t.category === cat.name).reduce((s,t) => s+t.amount, 0);
      if (prevSpent > 0) { prevTotal += prevSpent; prevMonths++; }
    }
    if (prevMonths === 0) return;

    const avg = prevTotal / prevMonths;
    const pctChange = ((thisMonthSpent - avg) / avg) * 100;
    if (pctChange > 50) {
      anomalies.push({ cat: cat.name, color: cat.color, thisMonth: thisMonthSpent, avg, pct: Math.round(pctChange) });
    }
  });

  if (!anomalies.length) { banner.classList.remove("show"); return; }

  banner.classList.add("show");
  list.innerHTML = anomalies.sort((a,b) => b.pct - a.pct).map(a => `
    <div class="anomaly-item">
      <div class="anomaly-item-left">
        <span style="width:8px;height:8px;border-radius:50%;background:${a.color};display:inline-block;flex-shrink:0;"></span>
        <span style="font-weight:600;">${a.cat}</span>
        <span style="color:var(--muted);font-size:12px;">${fmt(a.thisMonth)} (ort: ${fmt(a.avg)})</span>
      </div>
      <span class="anomaly-pct">+%${a.pct}</span>
    </div>`).join("");
}

// ─────────────────────────────────────────────────
// SHARE & IMPORT
// ─────────────────────────────────────────────────
let _shareCodeStr = "";

function generateShareCode(mode) {
  const monthly = mode === "month" ? currentMonthTxs() : state.txs.filter(t => t.userId === state.activeId);
  const data = {
    v: 1, type: "butce-share", user: getActiveUser().name,
    cats: state.cats, txs: monthly,
    exportedAt: new Date().toISOString(),
    month: mode === "month" ? `${state.currentDate.getFullYear()}-${state.currentDate.getMonth()+1}` : "all"
  };
  _shareCodeStr = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  const box = document.getElementById("shareCodeBox");
  const actions = document.getElementById("shareActions");
  if (box) { box.style.display = ""; box.textContent = _shareCodeStr.slice(0, 200) + "..."; }
  if (actions) actions.style.display = "";
  toast(mode === "month" ? "Paylaşım kodu oluşturuldu ✓" : "Tüm veriler koda eklendi ✓", "success");
}

function copyShareCode() {
  if (!_shareCodeStr) return;
  navigator.clipboard?.writeText(_shareCodeStr).then(() => toast("Kod kopyalandı ✓", "success"))
    .catch(() => {
      const ta = document.createElement("textarea");
      ta.value = _shareCodeStr; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
      toast("Kod kopyalandı ✓", "success");
    });
}

function shareViaWebShare() {
  if (!_shareCodeStr) return;
  if (navigator.share) {
    navigator.share({ title: "BütçeDostu Verisi", text: _shareCodeStr })
      .catch(() => copyShareCode());
  } else { copyShareCode(); }
}

function importFromCode() {
  const raw = document.getElementById("importCodeInput")?.value.trim();
  if (!raw) return toast("Önce paylaşım kodunu yapıştır.", "error");
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(raw))));
    if (data.type !== "butce-share") return toast("Geçersiz kod.", "error");
    _applySharedData(data);
  } catch(e) { toast("Geçersiz kod. Tekrar kontrol et.", "error"); }
}

function _applySharedData(data) {
  const msg = state.lang === "tr"
    ? `"${data.user}" adlı kullanıcıdan ${data.txs?.length || 0} işlem ve ${data.cats?.length || 0} kategori aktarılacak. Mevcut kategoriler korunur. Devam?`
    : `Import ${data.txs?.length || 0} transactions and ${data.cats?.length || 0} categories from "${data.user}"? Existing data kept.`;
  if (!confirm(msg)) return;

  // Merge categories
  if (data.cats) {
    data.cats.forEach(c => {
      if (!state.cats.find(sc => sc.name === c.name)) state.cats.push(c);
    });
  }
  // Merge transactions under active user
  if (data.txs) {
    const au = getActiveUser();
    data.txs.forEach(tx => {
      if (!state.txs.find(t => t.id === tx.id)) {
        state.txs.push({ ...tx, userId: au.id, owner: au.name });
      }
    });
  }
  saveState(); renderAll(); closeModal("shareModal");
  toast(`${data.txs?.length || 0} işlem aktarıldı ✓`, "success");
}

// Drag-drop import
(function() {
  const drop = document.getElementById("importDrop");
  const fileIn = document.getElementById("importDropFile");
  if (!drop || !fileIn) return;

  drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("drag-over"); });
  drop.addEventListener("dragleave", () => drop.classList.remove("drag-over"));
  drop.addEventListener("drop", e => {
    e.preventDefault(); drop.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    if (file) readImportFile(file);
  });
  fileIn.addEventListener("change", e => { if (e.target.files[0]) readImportFile(e.target.files[0]); e.target.value = ""; });

  function readImportFile(file) {
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        // Support both share format and regular backup format
        if (data.type === "butce-share") { _applySharedData(data); return; }
        if (data.users && data.transactions && data.customCategories) {
          if (!confirm(T("overwriteConfirm"))) return;
          state.users = data.users; state.txs = data.transactions; state.cats = data.customCategories;
          state.activeId = data.activeUserId || data.users[0]?.id;
          saveState(); renderAll(); closeModal("shareModal"); toast(T("importedOk"), "success");
        } else { toast(T("invalidFile"), "error"); }
      } catch { toast(T("invalidFile"), "error"); }
    };
    reader.readAsText(file);
  }
})();

// Mobile share button in settings page
function updateShareModalMobBtn() {
  // Nothing to do — handled by onclick in HTML
}

// ─────────────────────────────────────────────────
// ADD SHARE BUTTON TO MOBILE SETTINGS PAGE
// ─────────────────────────────────────────────────
(function addShareToMobSettings() {
  const mobSettings = document.getElementById("mob-settings-page");
  if (!mobSettings) return;
  const existing = mobSettings.querySelector("[data-share-btn]");
  if (existing) return;
  const sec = document.createElement("div");
  sec.className = "settings-section";
  sec.setAttribute("data-share-btn","1");
  sec.innerHTML = `<div class="settings-section-title">👥 Paylaş & İçe Aktar</div>
    <button class="icon-btn" style="width:100%;" onclick="openModal('shareModal')">👥 Paylaş / Veri Al</button>`;
  const firstSection = mobSettings.querySelector(".settings-section");
  if (firstSection) firstSection.before(sec);
})();


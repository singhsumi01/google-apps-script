/**
 * ============================================================
 * AI GOOGLE SHEET CONTEXT GENERATOR
 * ============================================================
 * Scans the active Google Spreadsheet, individual sheets,
 * column headers, formulas, data validation rules, and connected
 * Google Forms to generate structured, AI-ready context.
 * ============================================================
 */

/**
 * Creates custom menu entry when the spreadsheet is opened.
 *
 * @returns {void}
 */
function onOpen() {
  try {
    SpreadsheetApp.getUi()
      .createMenu('🤖 AI Sheet Context Generator')
      .addItem('Generate AI Context', 'showAIContextModal')
      .addToUi();
    console.log('Successfully initialized custom menu in Google Sheets UI.');
  } catch (e) {
    console.error('Failed to create UI menu: ' + e.message + '\nStack trace: ' + e.stack);
  }
}

/**
 * Renders and displays the AI Context Modal Dialog in Google Sheets.
 *
 * @returns {void}
 */
function showAIContextModal() {
  try {
    const html = HtmlService.createHtmlOutput(`<!DOCTYPE html> <html lang="en"> <head> <base target="_top"> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="theme-color" content="#f7f8fc"> <title>AI Sheet Context — SYNBUS</title> <script src="https\://cdn.tailwindcss.com"></script> <script> tailwind.config = { darkMode: 'class', theme: { extend: { fontFamily: { sans: ['Geologica'], heading: ['Bricolage Grotesque'], code: ['Google Sans Code'] }, colors: { ink: { 950: '#0b0d14', 900: '#10131d', 850: '#151927', 800: '#1a2030' }, violet: { 450: '#8b7cf6', 500: '#7968f2', 600: '#6754df' } }, boxShadow: { panel: '0 24px 80px rgba(0,0,0,.28)', violet: '0 10px 30px rgba(121,104,242,.24)' } } } } </script> <link rel="preconnect" href="https\://fonts.googleapis.com"> <link rel="preconnect" href="https\://fonts.gstatic.com" crossorigin> <link href="https\://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Geologica:wght@300..700&family=Google+Sans+Code:wght@400;500;600;700&display=swap" rel="stylesheet"> <script src="https\://unpkg.com/lucide@latest"></script> <style> :root { color-scheme: light; --bg: #f5f7fb; --panel: #ffffff; --panel-2: #f8f9fd; --line: #e5e9f2; --muted: #667085; --accent: #6654d9; } * { box-sizing: border-box; } html { min-height: 100%; background: var(--bg); } body { margin: 0; min-height: 100vh; color: #20243a; font-family: 'Geologica', sans-serif; background: radial-gradient(70rem 32rem at 50% -22rem, rgba(125, 105, 244, .14), transparent 70%), radial-gradient(35rem 30rem at 100% 100%, rgba(52, 94, 174, .06), transparent 70%), var(--bg); -webkit-font-smoothing: antialiased; } h1,h2,h3,h4,.font-heading { font-family: 'Bricolage Grotesque', sans-serif; }\n code, pre, kbd, samp, textarea.font-mono, .font-mono { font-family: 'Google Sans Code', monospace !important; } button, textarea { font: inherit; } button:focus-visible, textarea:focus-visible { outline: 2px solid #aaa0ff; outline-offset: 3px; } .panel { background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(250,251,255,.98)); border: 1px solid var(--line); box-shadow: 0 18px 55px rgba(31, 42, 76, .07); } .subtle-grid { background-image: linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px); background-size: 30px 30px; mask-image: linear-gradient(to bottom, black, transparent 80%); } .brand-mark { background: linear-gradient(145deg, #8d7cff, #6d5be8 55%, #5142bd); box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 0 8px 24px rgba(105,86,229,.2); } .primary-btn { background: linear-gradient(105deg, #7563ed, #6553d9 56%, #5442c2); box-shadow: inset 0 1px 0 rgba(255,255,255,.25), 0 8px 22px rgba(93,75,220,.18); transition: transform .18s ease, filter .18s ease, box-shadow .18s ease; } .primary-btn:hover:not(:disabled) { filter: brightness(1.08); transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255,255,255,.28), 0 12px 28px rgba(93,75,220,.24); } .primary-btn:active:not(:disabled) { transform: translateY(0); } .primary-btn:disabled { opacity: .7; cursor: wait; } .utility-btn { border: 1px solid #e0e5ef; background: #ffffff; transition: background .18s ease, border-color .18s ease, color .18s ease; } .utility-btn:hover:not(:disabled) { background: #f6f7fc; border-color: #cfd5e4; color: #24283d; } .utility-btn:disabled { opacity: .38; cursor: not-allowed; } .editor { background: #fbfcff; border: 1px solid #e1e6f0; transition: border-color .2s ease, box-shadow .2s ease; } .editor:focus-within { border-color: rgba(105,85,220,.55); box-shadow: 0 0 0 3px rgba(105,85,220,.08); } .status-pill { border: 1px solid #ccefe0; background: #f0fbf6; } .status-light { box-shadow: 0 0 0 4px rgba(74,222,128,.09); } .toast { animation: toastIn .24s cubic-bezier(.16,1,.3,1) both; } .toast.out { animation: toastOut .18s ease-in both; } @keyframes toastIn { from { opacity: 0; transform: translateY(8px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } } @keyframes toastOut { to { opacity: 0; transform: translateY(6px) scale(.99); } } ::selection { background: rgba(139,124,246,.36); color: white; } ::-webkit-scrollbar { width: 7px; height: 7px; } ::-webkit-scrollbar-track { background: #fbfcff; } ::-webkit-scrollbar-thumb { background: #c5ccdc; border-radius: 99px; } ::-webkit-scrollbar-thumb:hover { background: #7969e8; } @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } } </style> </head> <body class="min-h-screen px-4 py-5 sm:px-6 sm:py-8 lg:py-10"> <main class="mx-auto flex w-full max-w-5xl flex-col gap-5 sm:gap-6"> <!-- Product hero --> <section class="panel relative isolate overflow-hidden rounded-[26px] p-5 sm:p-8 lg:p-9"> <div class="subtle-grid pointer-events-none absolute inset-0 -z-10 opacity-50" aria-hidden="true"></div> <div class="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-500/[.08] blur-[80px]" aria-hidden="true"></div> <div class="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"> <div class="max-w-2xl"> <div class="flex items-center gap-3 sm:gap-4"> <i data-lucide="sparkles" class="h-8 w-8 shrink-0 text-violet-700 sm:h-12 sm:w-12" aria-hidden="true"></i> <h1 class="font-heading text-[2rem] font-bold leading-[1.05] tracking-[-.04em] text-slate-900 sm:text-5xl"><span class="text-violet-700">Synbus</span> AI Sheet Context Generator</h1> </div> <p class="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7"> Give your AI the spreadsheet context it needs. Capture sheet structure, formulas, validation rules and connected forms in one clean, reusable prompt. </p> </div> <div class="grid grid-cols-2 gap-2 lg:w-[260px] lg:shrink-0"> <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3.5"> <i data-lucide="scan-search" class="mb-3 h-4 w-4 text-violet-700" aria-hidden="true"></i> <p class="text-sm font-medium text-slate-700">Structure scan</p> <p class="mt-1 text-[12px] leading-4 text-slate-500">Sheet-aware capture</p> </div> <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3.5"> <i data-lucide="clipboard-check" class="mb-3 h-4 w-4 text-violet-700" aria-hidden="true"></i> <p class="text-sm font-medium text-slate-700">AI-ready output</p> <p class="mt-1 text-[12px] leading-4 text-slate-500">Easy to reuse</p> </div> </div> </div> </section> <!-- Main work area --> <section class="grid items-start gap-5 lg:grid-cols-[.78fr_1.22fr]"> <div class="panel rounded-[22px] p-5 sm:p-6"> <div class="mb-5 flex items-start gap-3"> <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-700"> <i data-lucide="wand-sparkles" class="h-5 w-5" aria-hidden="true"></i> </div> <div> <h2 class="font-heading text-lg font-semibold tracking-tight text-slate-900">Generate context</h2> <p class="mt-1 text-sm leading-5 text-slate-500">Scan the current sheet and prepare a context payload for your AI workflow.</p> </div> </div> <div class="mb-5 space-y-3"> <div class="flex gap-3"> <div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[11px] font-semibold text-violet-700">1</div> <div> <p class="text-sm font-medium text-slate-700">Inspect spreadsheet</p> <p class="mt-1 text-[13px] leading-5 text-slate-500">Read the available structure and connected form details.</p> </div> </div> <div class="ml-3 h-4 border-l border-dashed border-slate-700"></div> <div class="flex gap-3"> <div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[11px] font-semibold text-violet-700">2</div> <div> <p class="text-sm font-medium text-slate-700">Review the payload</p> <p class="mt-1 text-[13px] leading-5 text-slate-500">Check the generated context in the editor before copying.</p> </div> </div> <div class="ml-3 h-4 border-l border-dashed border-slate-700"></div> <div class="flex gap-3"> <div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[11px] font-semibold text-violet-700">3</div> <div> <p class="text-sm font-medium text-slate-700">Use it in your AI tool</p> <p class="mt-1 text-[13px] leading-5 text-slate-500">Copy the prompt and add it to your preferred AI conversation.</p> </div> </div> </div> <button id="generateBtn" onclick="generateContext()" type="button" class="primary-btn flex w-full items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 text-sm font-semibold text-white"> <span id="spinner" class="hidden h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true"></span> <i id="btnIcon" data-lucide="scan-search" class="h-[17px] w-[17px]" aria-hidden="true"></i> <span id="btnText">Scan &amp; Generate Context</span> </button> <p class="mt-3 flex items-start gap-2 text-[12px] leading-5 text-slate-500"> <i data-lucide="shield-check" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden="true"></i> <span>Run this from the spreadsheet where you want to capture context.</span> </p> </div> <div class="panel min-w-0 rounded-[22px] p-4 sm:p-5"> <div class="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start"> <div> <div class="flex items-center gap-2"> <h2 class="font-heading text-lg font-semibold tracking-tight text-slate-900">Context editor</h2> <span class="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-slate-500">Output</span> </div> <p class="mt-1.5 text-xs leading-5 text-slate-500">Your generated prompt appears here and can be edited before use.</p> </div> <span id="charCount" aria-live="polite" class="inline-flex w-fit items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 font-mono text-[11px] text-slate-500"> <i data-lucide="text" class="h-3.5 w-3.5" aria-hidden="true"></i> 0 characters </span> </div> <div class="editor overflow-hidden rounded-xl"> <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3.5 py-3"> <div class="flex items-center gap-2"> <span class="h-2 w-2 rounded-full bg-rose-400/70"></span> <span class="h-2 w-2 rounded-full bg-amber-300/70"></span> <span class="h-2 w-2 rounded-full bg-emerald-400/70"></span> <span class="ml-2 text-[11px] font-medium text-slate-500">spreadsheet-context.txt</span> </div> <span class="text-[11px] font-semibold uppercase tracking-[.14em] text-slate-400">Plain text</span> </div> <textarea id="prompt" aria-label="Generated spreadsheet context" placeholder="Nothing generated yet. Select “Scan & generate context” to inspect your active spreadsheet…" class="block min-h-[300px] w-full resize-y bg-transparent p-4 font-mono text-sm leading-6 text-slate-800 placeholder:font-sans placeholder:text-sm placeholder:leading-6 placeholder:text-slate-400 focus:outline-none sm:min-h-[265px] sm:p-5 sm:text-[12px]"></textarea> <div class="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2.5"> <span id="editorStatus" class="flex items-center gap-1.5 text-[12px] text-slate-500"> <i data-lucide="circle-dashed" class="h-3.5 w-3.5" aria-hidden="true"></i> Waiting for scan </span> <div class="flex items-center gap-2"> <button id="selectBtn" type="button" onclick="selectContext()" disabled class="utility-btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[12px] font-medium text-slate-400"> <i data-lucide="text-select" class="h-3.5 w-3.5" aria-hidden="true"></i> Select all </button> <button id="downloadBtn" type="button" onclick="downloadContext()" disabled class="utility-btn inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[12px] font-medium text-slate-400"> <i data-lucide="download" class="h-3.5 w-3.5" aria-hidden="true"></i> Export .txt </button> </div> </div> </div> <button id="copyBtn" onclick="copyContext()" type="button" disabled class="utility-btn mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-emerald-700"> <i data-lucide="copy" class="h-4 w-4" aria-hidden="true"></i> <span>Copy prompt to clipboard</span> </button> </div> </section> <footer class="flex flex-col items-center justify-between gap-3 border-t border-slate-200 px-1 pt-4 sm:flex-row"> <p class="text-center text-[12px] text-slate-400 sm:text-left"> ©2018—<script>document.write(new Date().getFullYear())</script> <a href="https\://synbussolutions.com" target="_blank" rel="noopener noreferrer" class="text-violet-700 hover:text-violet-800">Synbus Solutions</a>. All rights reserved. </p> <div class="flex items-center gap-4 text-slate-400"> <a href="https\://www.linkedin.com/company/synbussolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-violet-700 transition-colors"> <svg xmlns="http\://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> </a> <a href="https\://www.facebook.com/synbussolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-violet-700 transition-colors"> <svg xmlns="http\://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> </a> <a href="https\://www.instagram.com/synbussolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-violet-700 transition-colors"> <svg xmlns="http\://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/></svg> </a> <a href="https\://wa.me/7838343515?text=Hi" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="transition-colors hover:text-violet-700"> <svg xmlns="http\://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"> <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.49-8.41ZM12.06 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/> </svg> </a> </div> </footer> </main> <div id="toast-container" role="status" aria-live="polite" class="pointer-events-none fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-md flex-col gap-2"></div> <script> function refreshIcons() { if (window.lucide) window.lucide.createIcons(); } document.addEventListener('DOMContentLoaded', refreshIcons); function showToast(options) { const { message, type = 'info', duration = 3000 } = options; const container = document.getElementById('toast-container'); const toast = document.createElement('div'); const colors = { success: ['border-emerald-400/25', 'text-emerald-700', 'check-circle-2'], error: ['border-rose-400/25', 'text-rose-700', 'alert-circle'], info: ['border-violet-400/25', 'text-violet-700', 'info'] }; const selected = colors[type] || colors.info; toast.className = 'toast pointer-events-auto flex items-center gap-3 rounded-xl border bg-white px-4 py-3.5 shadow-2xl backdrop-blur-xl'; toast.classList.add(selected[0]); const icon = document.createElement('i'); icon.setAttribute('data-lucide', selected[2]); icon.className = 'h-4 w-4 shrink-0 ' + selected[1]; const text = document.createElement('span'); text.className = 'text-xs leading-5 text-slate-700'; text.textContent = message; toast.append(icon, text); container.appendChild(toast); refreshIcons(); setTimeout(function() { toast.classList.add('out'); setTimeout(function() { toast.remove(); }, 220); }, duration); } function setEditorReady(ready) { document.getElementById('copyBtn').disabled = !ready; document.getElementById('selectBtn').disabled = !ready; document.getElementById('downloadBtn').disabled = !ready; } function generateContext() { const generateBtn = document.getElementById('generateBtn'); const spinner = document.getElementById('spinner'); const btnText = document.getElementById('btnText'); const btnIcon = document.getElementById('btnIcon'); const promptArea = document.getElementById('prompt'); const editorStatus = document.getElementById('editorStatus'); generateBtn.disabled = true; spinner.classList.remove('hidden'); btnIcon.classList.add('hidden'); btnText.textContent = 'Scanning spreadsheet…'; editorStatus.innerHTML = '<i data-lucide="loader-circle" class="h-3.5 w-3.5 animate-spin" aria-hidden="true"></i> Scanning active sheet'; refreshIcons(); showToast({ message: 'Scanning spreadsheet structure and connected forms…', type: 'info', duration: 2500 }); google.script.run .withSuccessHandler(function(result) { promptArea.value = String(result == null ? '' : result); promptArea.removeAttribute('readonly'); updateMetaInfo(promptArea.value); setEditorReady(promptArea.value.length > 0); generateBtn.disabled = false; spinner.classList.add('hidden'); btnIcon.classList.remove('hidden'); btnText.textContent = 'Refresh context'; editorStatus.innerHTML = '<i data-lucide="check-circle-2" class="h-3.5 w-3.5 text-emerald-700" aria-hidden="true"></i> Context generated successfully'; refreshIcons(); showToast({ message: 'Your spreadsheet context is ready to review.', type: 'success', duration: 3500 }); }) .withFailureHandler(function(error) { generateBtn.disabled = false; spinner.classList.add('hidden'); btnIcon.classList.remove('hidden'); btnText.textContent = promptArea.value ? 'Refresh context' : 'Scan & generate context'; editorStatus.innerHTML = '<i data-lucide="alert-circle" class="h-3.5 w-3.5 text-rose-300" aria-hidden="true"></i> Scan failed — try again'; refreshIcons(); showToast({ message: 'Scan failed: ' + ((error && error.message) || error), type: 'error', duration: 4500 }); }) .generateSpreadsheetContext(); } function updateMetaInfo(value) { const text = String(value || ''); document.getElementById('charCount').innerHTML = '<i data-lucide="text" class="h-3.5 w-3.5" aria-hidden="true"></i> ' + text.length.toLocaleString() + (text.length === 1 ? ' character' : ' characters'); setEditorReady(text.length > 0); refreshIcons(); } function copyContext() { const textarea = document.getElementById('prompt'); if (!textarea.value) { showToast({ message: 'Generate the context before copying.', type: 'info' }); return; } textarea.focus(); textarea.select(); textarea.setSelectionRange(0, textarea.value.length); if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(textarea.value) .then(function() { showToast({ message: 'Copied. Your context is ready to paste into your AI tool.', type: 'success' }); }) .catch(function() { fallbackCopy(textarea); }); } else { fallbackCopy(textarea); } } function fallbackCopy(textarea) { try { const successful = document.execCommand('copy'); if (successful) showToast({ message: 'Context copied to clipboard.', type: 'success' }); else showToast({ message: 'Copy was blocked. Select the text and copy it manually.', type: 'error' }); } catch (err) { showToast({ message: 'Manual copy required (Ctrl+C / Cmd+C).', type: 'error' }); } } function selectContext() { const textarea = document.getElementById('prompt'); textarea.focus(); textarea.select(); textarea.setSelectionRange(0, textarea.value.length); } function downloadContext() { const text = document.getElementById('prompt').value; if (!text) return; const blob = new Blob([text], { type: 'text/plain;charset=utf-8' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'spreadsheet-context.txt'; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url); showToast({ message: 'Context exported as a text file.', type: 'success' }); } document.getElementById('prompt').addEventListener('input', function() { updateMetaInfo(this.value); document.getElementById('editorStatus').innerHTML = '<i data-lucide="pencil-line" class="h-3.5 w-3.5" aria-hidden="true"></i> Edited locally'; refreshIcons(); }); </script> </body> </html>`)
      .setTitle('⚡ AI Sheet Context Generator by Synbus Solutions')
      .setWidth(1050)
      .setHeight(700);

    SpreadsheetApp.getUi().showModalDialog(html, '⚡ AI Sheet Context Generator by Synbus Solutions');

    console.log('Displayed AI Sheet Context modal dialog.');
  } catch (e) {
    console.error('Failed to display modal dialog: ' + e.message + '\nStack trace: ' + e.stack);
  }
}

/**
 * Main backend function to gather metadata across all sheets and connected Google Forms.
 *
 * @returns {string} Fully structured markdown prompt containing system information.
 * @throws {Error} If spreadsheet scanning or prompt construction fails.
 */
function generateSpreadsheetContext() {
  console.log('Starting spreadsheet context generation...');
  const startTime = new Date().getTime();

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    const spreadsheetInfo = {
      spreadsheetName: ss.getName(),
      spreadsheetId: ss.getId(),
      spreadsheetUrl: ss.getUrl(),
      timezone: ss.getSpreadsheetTimeZone(),
      locale: ss.getSpreadsheetLocale(),
      sheets: [],
      forms: []
    };

    console.log(`Scanning spreadsheet "${spreadsheetInfo.spreadsheetName}" (ID: ${spreadsheetInfo.spreadsheetId})`);

    const sheets = ss.getSheets();
    console.log(`Found ${sheets.length} sheet(s) in active spreadsheet.`);

    // Scan individual sheets
    sheets.forEach((sheet, index) => {
      console.log(`Processing sheet [${index + 1}/${sheets.length}]: "${sheet.getName()}"`);
      const sheetInfo = scanSheet(sheet);
      spreadsheetInfo.sheets.push(sheetInfo);
    });

    // Scan connected Google Forms
    console.log('Scanning for connected Google Forms...');
    const forms = scanConnectedForms(ss);
    spreadsheetInfo.forms = forms;

    const duration = new Date().getTime() - startTime;
    console.log(`Spreadsheet context generated successfully in ${duration} ms.`);

    return buildAIPrompt(spreadsheetInfo);
  } catch (e) {
    console.error('Error generating spreadsheet context: ' + e.message + '\nStack trace: ' + e.stack);
    throw new Error('Failed to generate spreadsheet context: ' + e.message);
  }
}

/**
 * Scans structural details of a single sheet, including headers, formulas, and validations.
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet - Active sheet to scan.
 * @returns {Object} Structured sheet metadata.
 */
function scanSheet(sheet) {
  const sheetName = sheet.getName();
  const maxRows = sheet.getMaxRows();
  const maxColumns = sheet.getMaxColumns();
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  let headers = [];

  if (lastColumn > 0) {
    try {
      const firstRowValues = sheet
        .getRange(1, 1, 1, lastColumn)
        .getDisplayValues()[0];

      headers = firstRowValues.map((headerText, index) => {
        const cleanHeader = (headerText || '').trim();
        return {
          column: columnToLetter(index + 1),
          columnNumber: index + 1,
          header: cleanHeader.length > 0 ? cleanHeader : '(Blank Header)'
        };
      });
    } catch (e) {
      console.warn(`Could not read headers for sheet "${sheetName}": ${e.message}`);
    }
  }

  // Detect formula presence in top rows
  const formulaColumns = [];
  if (lastRow > 1 && lastColumn > 0) {
    try {
      const sampleRows = Math.min(lastRow, 25);
      const formulas = sheet.getRange(1, 1, sampleRows, lastColumn).getFormulas();

      for (let col = 0; col < lastColumn; col++) {
        let hasFormula = false;
        for (let row = 0; row < formulas.length; row++) {
          if (formulas[row][col] && formulas[row][col].toString().startsWith('=')) {
            hasFormula = true;
            break;
          }
        }

        if (hasFormula) {
          formulaColumns.push({
            column: columnToLetter(col + 1),
            header: headers[col] ? headers[col].header : '(Unknown Header)'
          });
        }
      }
    } catch (e) {
      console.warn(`Formula scan skipped for sheet "${sheetName}": ${e.message}`);
    }
  }

  // Detect data validation presence
  const validationColumns = [];
  if (lastRow > 1 && lastColumn > 0) {
    try {
      const sampleRows = Math.min(lastRow, 25);
      const validations = sheet.getRange(1, 1, sampleRows, lastColumn).getDataValidations();

      for (let col = 0; col < lastColumn; col++) {
        let hasValidation = false;
        for (let row = 0; row < validations.length; row++) {
          if (validations[row][col] !== null) {
            hasValidation = true;
            break;
          }
        }

        if (hasValidation) {
          validationColumns.push({
            column: columnToLetter(col + 1),
            header: headers[col] ? headers[col].header : '(Unknown Header)'
          });
        }
      }
    } catch (e) {
      console.warn(`Data validation scan skipped for sheet "${sheetName}": ${e.message}`);
    }
  }

  return {
    sheetName: sheetName,
    sheetId: sheet.getSheetId(),
    totalRowsUsed: lastRow,
    totalColumnsUsed: lastColumn,
    maxRows: maxRows,
    maxColumns: maxColumns,
    frozenRows: sheet.getFrozenRows(),
    frozenColumns: sheet.getFrozenColumns(),
    headers: headers,
    formulaColumns: formulaColumns,
    validationColumns: validationColumns
  };
}

/**
 * Scans connected Google Forms linked to the spreadsheet.
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss - Active spreadsheet instance.
 * @returns {Array<Object>} List of scanned form metadata objects.
 */
function scanConnectedForms(ss) {
  const forms = [];
  const formUrls = new Set();

  try {
    const formUrl = ss.getFormUrl();
    if (formUrl) {
      formUrls.add(formUrl);
      console.log('Linked Google Form URL detected via SpreadsheetApp.getFormUrl(): ' + formUrl);
    }
  } catch (e) {
    console.warn('Unable to fetch primary form URL from spreadsheet: ' + e.message);
  }

  formUrls.forEach(formUrl => {
    try {
      const form = FormApp.openByUrl(formUrl);

      const formInfo = {
        title: form.getTitle() || '(Untitled Form)',
        formId: form.getId(),
        formUrl: formUrl,
        description: form.getDescription() || '',
        destinationId: '',
        destinationType: '',
        responseSheet: '',
        questions: []
      };

      try {
        formInfo.destinationId = form.getDestinationId() || '';
        formInfo.destinationType = String(form.getDestinationType() || '');
      } catch (e) {
        console.warn('Could not read form destination attributes: ' + e.message);
      }

      formInfo.responseSheet = detectFormResponseSheet(ss, form);

      const items = form.getItems();
      console.log(`Found ${items.length} item(s) in connected Google Form "${formInfo.title}".`);

      items.forEach((item, index) => {
        const question = {
          number: index + 1,
          title: item.getTitle(),
          type: String(item.getType()),
          required: false,
          choices: [],
          scale: null
        };

        try {
          switch (item.getType()) {
            case FormApp.ItemType.TEXT:
              question.required = item.asTextItem().isRequired();
              break;

            case FormApp.ItemType.PARAGRAPH_TEXT:
              question.required = item.asParagraphTextItem().isRequired();
              break;

            case FormApp.ItemType.MULTIPLE_CHOICE:
              const mc = item.asMultipleChoiceItem();
              question.required = mc.isRequired();
              question.choices = mc.getChoices().map(c => c.getValue());
              break;

            case FormApp.ItemType.CHECKBOX:
              const cb = item.asCheckboxItem();
              question.required = cb.isRequired();
              question.choices = cb.getChoices().map(c => c.getValue());
              break;

            case FormApp.ItemType.LIST:
              const list = item.asListItem();
              question.required = list.isRequired();
              question.choices = list.getChoices().map(c => c.getValue());
              break;

            case FormApp.ItemType.SCALE:
              const scale = item.asScaleItem();
              question.required = scale.isRequired();
              question.scale = {
                lower: scale.getLowerBound(),
                upper: scale.getUpperBound()
              };
              break;

            case FormApp.ItemType.DATE:
              question.required = item.asDateItem().isRequired();
              break;

            case FormApp.ItemType.DATETIME:
              question.required = item.asDateTimeItem().isRequired();
              break;

            case FormApp.ItemType.TIME:
              question.required = item.asTimeItem().isRequired();
              break;

            case FormApp.ItemType.DURATION:
              question.required = item.asDurationItem().isRequired();
              break;
          }
        } catch (itemErr) {
          console.warn(`Error parsing form item ${index + 1} (${item.getTitle()}): ${itemErr.message}`);
        }

        formInfo.questions.push(question);
      });

      forms.push(formInfo);
    } catch (error) {
      console.error(`Failed to open/scan form at URL "${formUrl}": ${error.message}\nStack trace: ${error.stack}`);
      forms.push({
        formUrl: formUrl,
        error: 'Form detected but could not be opened. ' + error.message
      });
    }
  });

  return forms;
}

/**
 * Attempts to match Google Form question titles against sheet headers to find response sheet.
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} ss - Active spreadsheet instance.
 * @param {GoogleAppsScript.Forms.Form} form - Google Form instance.
 * @returns {string} Name of matching sheet or empty string.
 */
function detectFormResponseSheet(ss, form) {
  try {
    const questionTitles = form.getItems()
      .map(item => (item.getTitle() || '').trim().toLowerCase())
      .filter(title => title.length > 0);

    if (questionTitles.length === 0) return '';

    const sheets = ss.getSheets();
    let bestMatch = null;
    let bestScore = 0;

    sheets.forEach(sheet => {
      const lastCol = sheet.getLastColumn();
      if (lastCol === 0) return;

      const headers = sheet.getRange(1, 1, 1, lastCol)
        .getDisplayValues()[0]
        .map(h => (h || '').trim().toLowerCase());

      let score = 0;
      questionTitles.forEach(qTitle => {
        if (headers.includes(qTitle)) {
          score++;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestMatch = sheet.getName();
      }
    });

    return bestMatch || '';
  } catch (e) {
    console.warn(`Response sheet detection failed: ${e.message}`);
    return '';
  }
}

/**
 * Constructs structured LLM prompt context from parsed metadata.
 *
 * @param {Object} info - Aggregated spreadsheet and form metadata.
 * @returns {string} Formatted markdown prompt text.
 */
function buildAIPrompt(info) {
  let output = '';

  output += `
Act as an elite Google Apps Script engineer and Workspace automation architect. Your objective is to analyze, debug, optimize, or construct robust automations for the provided Google Sheets environment.

## CORE SYSTEM DIRECTIVES
1. Schema Strictness: Strictly adhere to the existing spreadsheet architecture. Do not alter provided sheet names, data structures, or header labels.
2. Dynamic Referencing: Always map columns dynamically by matching header names. Never use hardcoded column indices (e.g., avoid sheet.getRange(1, 4) if the column can be found by name).
3. Production-Ready Delivery: Provide complete, fully functional, and optimized code intended to be bound directly to the container spreadsheet. Avoid partial snippets unless asked.
4. Non-Destructive Execution: Preserve all existing formulas, data validations, and structural logic. Never overwrite structural elements unless explicitly instructed.
5.Assumption Transparency: Clearly state any logical assumptions made, missing parameters, or additional triggers (like onEdit or Time-driven triggers) required for the code to run successfully.

## SYSTEM METADATA
Spreadsheet Name : ${info.spreadsheetName}
Spreadsheet ID   : ${info.spreadsheetId}
Timezone         : ${info.timezone}
Locale           : ${info.locale}
Total Sheets     : ${info.sheets.length}

## SHEET STRUCTURE ANALYSIS
`;

  info.sheets.forEach((sheet, index) => {
    output += `[SHEET ${index + 1}: ${sheet.sheetName}]
- Sheet ID: ${sheet.sheetId}
- Used Dimensions: ${sheet.totalRowsUsed} Rows x ${sheet.totalColumnsUsed} Columns
- Max Dimensions: ${sheet.maxRows} Rows x ${sheet.maxColumns} Columns
- Frozen View: ${sheet.frozenRows} Row(s), ${sheet.frozenColumns} Column(s)

COLUMN HEADERS:
`;

    if (sheet.headers.length === 0) {
      output += `  (No headers found)\n`;
    } else {
      sheet.headers.forEach(h => {
        output += `  - Column ${h.column} (${h.columnNumber}): "${h.header}"\n`;
      });
    }

    if (sheet.formulaColumns.length > 0) {
      output += `\nFORMULA COLUMNS DETECTED:\n`;
      sheet.formulaColumns.forEach(f => {
        output += `  - Column ${f.column}: "${f.header}"\n`;
      });
    }

    if (sheet.validationColumns.length > 0) {
      output += `\nDATA VALIDATION COLUMNS:\n`;
      sheet.validationColumns.forEach(v => {
        output += `  - Column ${v.column}: "${v.header}"\n`;
      });
    }

    output += `\n`;
  });

  output += `\n## CONNECTED GOOGLE FORMS\n`;

  if (!info.forms || info.forms.length === 0) {
    output += `No linked Google Forms detected.\n`;
  } else {
    info.forms.forEach((form, index) => {
      output += `\n[FORM ${index + 1}: ${form.title || 'Untitled Form'}]
- Form ID: ${form.formId || 'N/A'}
- Response Sheet Target: ${form.responseSheet || 'Not explicitly matched'}
- Description: ${form.description || 'None'}

FORM QUESTIONS:
`;

      if (form.error) {
        output += `  ⚠️ ${form.error}\n`;
      } else if (form.questions && form.questions.length > 0) {
        form.questions.forEach(q => {
          output += `  ${q.number}. "${q.title}"
     - Type: ${q.type} | Required: ${q.required ? 'YES' : 'NO'}\n`;
          if (q.choices && q.choices.length > 0) {
            output += `     - Choices: ${q.choices.join(' | ')}\n`;
          }
          if (q.scale) {
            output += `     - Scale: ${q.scale.lower} to ${q.scale.upper}\n`;
          }
        });
      } else {
        output += `  (No questions found)\n`;
      }
    });
  }

  output += `\n## USER INSTRUCTIONS / QUESTION
[PASTE YOUR SPECIFIC QUESTION OR AUTOMATION REQUEST HERE]
`;

  return output.trim();
}

/**
 * Converts 1-based column index to standard Spreadsheet A1 notation column letters.
 *
 * @param {number} column - 1-based column number (e.g. 1 = A, 27 = AA).
 * @returns {string} Column letter string.
 */
function columnToLetter(column) {
  let temp = 0;
  let letter = '';
  let col = Math.floor(column);

  while (col > 0) {
    temp = (col - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    col = Math.floor((col - temp - 1) / 26);
  }
  return letter;
}

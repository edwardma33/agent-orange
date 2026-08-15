-- Agent Orange: a Warp-matched, near-black Neovim colorscheme.
vim.cmd("highlight clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end

local variant = vim.g.agent_orange_variant or "dark"
vim.g.agent_orange_variant = nil

vim.o.background = variant == "light" and "light" or "dark"
vim.o.termguicolors = true
vim.g.colors_name = variant == "light" and "agent_orange_light" or "agent_orange"

local dark = {
  bg = "#111111",
  surface = "#161616",
  selection = "#242424",
  line = "#1a1a1a",
  muted = "#737373",
  dim = "#4a4a4a",
  fg = "#e8e8e8",
  bright = "#f5f5f5",
  orange = "#ff6b00",
  red = "#d46a78",
  red_bright = "#ec8390",
  green = "#44c995",
  green_bright = "#5de0ad",
  amber = "#e7b34a",
  amber_bright = "#f2c45c",
  blue = "#91b7e3",
  purple = "#c5a1e8",
  cyan = "#80d1ca",
  blue_normal = "#779ecb",
  magenta_normal = "#b08ad5",
  cyan_normal = "#66b7b0",
  danger_bg = "#2a151a",
  warning_bg = "#2b2413",
  info_bg = "#142132",
  success_bg = "#10251e",
  hint_bg = "#102522",
}

local light = {
  bg = "#f8f7f5",
  surface = "#ffffff",
  selection = "#f1e8df",
  line = "#e6e1db",
  muted = "#716b64",
  dim = "#a59e96",
  fg = "#25221f",
  bright = "#111111",
  orange = "#ff6b00",
  red = "#b94d60",
  red_bright = "#9f374a",
  green = "#197a55",
  green_bright = "#126442",
  amber = "#9a6500",
  amber_bright = "#7a5100",
  blue = "#3b6399",
  purple = "#7953a3",
  cyan = "#197b75",
  blue_normal = "#3b6399",
  magenta_normal = "#7953a3",
  cyan_normal = "#197b75",
  danger_bg = "#f8e5e8",
  warning_bg = "#f9eed8",
  info_bg = "#e6eef8",
  success_bg = "#e1f1e9",
  hint_bg = "#e3f1f0",
}

local c = variant == "light" and light or dark

local function hi(group, opts)
  vim.api.nvim_set_hl(0, group, opts)
end

hi("Normal", { fg = c.fg, bg = c.bg })
hi("NormalFloat", { fg = c.fg, bg = c.surface })
hi("FloatBorder", { fg = c.dim, bg = c.surface })
hi("FloatTitle", { fg = c.orange, bg = c.surface, bold = true })
hi("ColorColumn", { bg = c.line })
hi("CursorLine", { bg = c.line })
hi("CursorColumn", { bg = c.line })
hi("LineNr", { fg = c.dim })
hi("CursorLineNr", { fg = c.orange, bold = true })
hi("SignColumn", { bg = c.bg })
hi("FoldColumn", { fg = c.dim, bg = c.bg })
hi("VertSplit", { fg = c.line })
hi("WinSeparator", { fg = c.line })
hi("StatusLine", { fg = c.fg, bg = c.surface })
hi("StatusLineNC", { fg = c.muted, bg = c.surface })
hi("TabLine", { fg = c.muted, bg = c.surface })
hi("TabLineSel", { fg = c.fg, bg = c.selection, bold = true })
hi("Pmenu", { fg = c.fg, bg = c.surface })
hi("PmenuSel", { fg = c.bright, bg = c.selection, bold = true })
hi("PmenuKind", { fg = c.cyan, bg = c.surface })
hi("PmenuExtra", { fg = c.muted, bg = c.surface })
hi("Visual", { bg = c.selection })
hi("Search", { fg = c.bg, bg = c.amber })
hi("IncSearch", { fg = c.bg, bg = c.orange, bold = true })
hi("MatchParen", { fg = c.orange, bold = true })
hi("NonText", { fg = c.dim })
hi("Whitespace", { fg = c.dim })
hi("EndOfBuffer", { fg = c.bg })
hi("Cursor", { fg = c.bg, bg = c.orange })
hi("Directory", { fg = c.blue })
hi("Title", { fg = c.orange, bold = true })
hi("Question", { fg = c.green })
hi("WarningMsg", { fg = c.amber })
hi("ErrorMsg", { fg = c.red })
hi("QuickFixLine", { bg = c.selection, bold = true })
hi("SpellBad", { undercurl = true, sp = c.red })
hi("SpellCap", { undercurl = true, sp = c.blue })
hi("SpellRare", { undercurl = true, sp = c.purple })
hi("SpellLocal", { undercurl = true, sp = c.cyan })

hi("Comment", { fg = c.muted, italic = true })
hi("Constant", { fg = c.amber })
hi("String", { fg = c.green })
hi("Character", { fg = c.green })
hi("Number", { fg = c.amber })
hi("Boolean", { fg = c.amber })
hi("Identifier", { fg = c.fg })
hi("Function", { fg = c.blue })
-- Keep member access distinct from its module/package, e.g. boilerplate.MainGoFileData.
hi("@variable.member", { fg = c.purple })
hi("@property", { fg = c.purple })
hi("@field", { fg = c.purple })
hi("goField", { fg = c.purple })
hi("Statement", { fg = c.orange, bold = true })
hi("Keyword", { fg = c.orange })
hi("Operator", { fg = c.fg })
hi("PreProc", { fg = c.purple })
hi("Type", { fg = c.cyan })
hi("Special", { fg = c.purple })
hi("Todo", { fg = c.bg, bg = c.amber, bold = true })
hi("Error", { fg = c.red })

-- Tree-sitter syntax keeps code roles distinct without turning the editor into a rainbow.
hi("@comment", { fg = c.muted, italic = true })
hi("@comment.todo", { fg = c.bg, bg = c.amber, bold = true })
hi("@comment.note", { fg = c.bg, bg = c.blue, bold = true })
hi("@comment.warning", { fg = c.bg, bg = c.amber, bold = true })
hi("@comment.error", { fg = c.bg, bg = c.red, bold = true })
hi("@string", { fg = c.green })
hi("@string.escape", { fg = c.cyan })
hi("@string.regex", { fg = c.purple })
hi("@character", { fg = c.green })
hi("@number", { fg = c.amber })
hi("@boolean", { fg = c.amber })
hi("@constant", { fg = c.amber })
hi("@constant.builtin", { fg = c.amber })
hi("@variable", { fg = c.fg })
hi("@variable.builtin", { fg = c.orange })
hi("@variable.parameter", { fg = c.fg })
hi("@variable.parameter.builtin", { fg = c.orange })
hi("@variable.member", { fg = c.purple })
hi("@property", { fg = c.purple })
hi("@field", { fg = c.purple })
hi("@function", { fg = c.blue })
hi("@function.builtin", { fg = c.blue })
hi("@function.call", { fg = c.blue })
hi("@function.macro", { fg = c.purple })
hi("@constructor", { fg = c.cyan })
hi("@method", { fg = c.blue })
hi("@method.call", { fg = c.blue })
hi("@keyword", { fg = c.orange })
hi("@keyword.function", { fg = c.orange, bold = true })
hi("@keyword.return", { fg = c.orange })
hi("@keyword.import", { fg = c.orange })
hi("@keyword.operator", { fg = c.orange })
hi("@conditional", { fg = c.orange })
hi("@repeat", { fg = c.orange })
hi("@exception", { fg = c.orange })
hi("@operator", { fg = c.fg })
hi("@type", { fg = c.cyan })
hi("@type.builtin", { fg = c.cyan })
hi("@type.definition", { fg = c.cyan })
hi("@type.qualifier", { fg = c.orange })
hi("@namespace", { fg = c.cyan })
hi("@module", { fg = c.cyan })
hi("@module.builtin", { fg = c.cyan })
hi("@attribute", { fg = c.purple })
hi("@attribute.builtin", { fg = c.purple })
hi("@label", { fg = c.orange })
hi("@tag", { fg = c.orange })
hi("@tag.attribute", { fg = c.purple })
hi("@tag.delimiter", { fg = c.dim })
hi("@punctuation.delimiter", { fg = c.muted })
hi("@punctuation.bracket", { fg = c.fg })
hi("@markup.heading", { fg = c.orange, bold = true })
hi("@markup.strong", { fg = c.bright, bold = true })
hi("@markup.italic", { fg = c.fg, italic = true })
hi("@markup.link", { fg = c.blue, underline = true })
hi("@markup.raw", { fg = c.green })

-- Semantic token fallbacks work with Neovim's built-in LSP client.
hi("@lsp.type.class", { fg = c.cyan })
hi("@lsp.type.decorator", { fg = c.purple })
hi("@lsp.type.enum", { fg = c.cyan })
hi("@lsp.type.enumMember", { fg = c.purple })
hi("@lsp.type.interface", { fg = c.cyan })
hi("@lsp.type.macro", { fg = c.purple })
hi("@lsp.type.namespace", { fg = c.cyan })
hi("@lsp.type.parameter", { fg = c.fg })
hi("@lsp.type.property", { fg = c.purple })
hi("@lsp.type.struct", { fg = c.cyan })
hi("@lsp.type.typeParameter", { fg = c.cyan })

hi("DiagnosticError", { fg = c.red })
hi("DiagnosticWarn", { fg = c.amber })
hi("DiagnosticInfo", { fg = c.blue })
hi("DiagnosticHint", { fg = c.cyan })
hi("DiagnosticOk", { fg = c.green })
hi("DiagnosticVirtualTextError", { fg = c.red, bg = c.danger_bg })
hi("DiagnosticVirtualTextWarn", { fg = c.amber, bg = c.warning_bg })
hi("DiagnosticVirtualTextInfo", { fg = c.blue, bg = c.info_bg })
hi("DiagnosticVirtualTextHint", { fg = c.cyan, bg = c.hint_bg })
hi("DiagnosticFloatingError", { fg = c.red })
hi("DiagnosticFloatingWarn", { fg = c.amber })
hi("DiagnosticFloatingInfo", { fg = c.blue })
hi("DiagnosticFloatingHint", { fg = c.cyan })
hi("DiagnosticDeprecated", { fg = c.muted, strikethrough = true })
hi("DiagnosticUnderlineError", { undercurl = true, sp = c.red })
hi("DiagnosticUnderlineWarn", { undercurl = true, sp = c.amber })
hi("DiagnosticUnderlineInfo", { undercurl = true, sp = c.blue })
hi("DiagnosticUnderlineHint", { undercurl = true, sp = c.cyan })

hi("DiffAdd", { fg = c.green, bg = c.success_bg })
hi("DiffChange", { fg = c.amber, bg = c.warning_bg })
hi("DiffDelete", { fg = c.red, bg = c.danger_bg })
hi("DiffText", { fg = c.bright, bg = c.selection, bold = true })
hi("Added", { fg = c.green })
hi("Changed", { fg = c.amber })
hi("Removed", { fg = c.red })

hi("GitSignsAdd", { fg = c.green })
hi("GitSignsChange", { fg = c.amber })
hi("GitSignsDelete", { fg = c.red })
hi("GitSignsAddLn", { bg = c.success_bg })
hi("GitSignsChangeLn", { bg = c.warning_bg })
hi("GitSignsDeleteLn", { bg = c.danger_bg })

-- Common plugin integrations are safe to define even when a plugin is not installed.
hi("TelescopeNormal", { fg = c.fg, bg = c.surface })
hi("TelescopeBorder", { fg = c.dim, bg = c.surface })
hi("TelescopePromptNormal", { fg = c.fg, bg = c.selection })
hi("TelescopePromptBorder", { fg = c.orange, bg = c.selection })
hi("TelescopePromptTitle", { fg = c.bg, bg = c.orange, bold = true })
hi("TelescopePreviewTitle", { fg = c.fg, bg = c.line })
hi("TelescopeResultsTitle", { fg = c.fg, bg = c.line })
hi("TelescopeSelection", { fg = c.bright, bg = c.selection, bold = true })
hi("TelescopeMatching", { fg = c.orange, bold = true })

hi("CmpItemAbbr", { fg = c.fg })
hi("CmpItemAbbrMatch", { fg = c.orange, bold = true })
hi("CmpItemAbbrMatchFuzzy", { fg = c.orange, bold = true })
hi("CmpItemMenu", { fg = c.muted })
hi("CmpItemKindFunction", { fg = c.blue })
hi("CmpItemKindMethod", { fg = c.blue })
hi("CmpItemKindVariable", { fg = c.fg })
hi("CmpItemKindField", { fg = c.purple })
hi("CmpItemKindProperty", { fg = c.purple })
hi("CmpItemKindClass", { fg = c.cyan })
hi("CmpItemKindInterface", { fg = c.cyan })
hi("CmpItemKindKeyword", { fg = c.orange })
hi("CmpItemKindSnippet", { fg = c.green })
hi("CmpItemKindText", { fg = c.muted })

vim.g.terminal_color_0 = c.line
vim.g.terminal_color_1 = c.red
vim.g.terminal_color_2 = c.green
vim.g.terminal_color_3 = c.amber
vim.g.terminal_color_4 = c.blue_normal
vim.g.terminal_color_5 = c.magenta_normal
vim.g.terminal_color_6 = c.cyan_normal
vim.g.terminal_color_7 = c.fg
vim.g.terminal_color_8 = c.dim
vim.g.terminal_color_9 = c.red_bright
vim.g.terminal_color_10 = c.green_bright
vim.g.terminal_color_11 = c.amber_bright
vim.g.terminal_color_12 = c.blue
vim.g.terminal_color_13 = c.purple
vim.g.terminal_color_14 = c.cyan
vim.g.terminal_color_15 = c.bright

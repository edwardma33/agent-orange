-- Agent Orange: a Warp-matched, near-black Neovim colorscheme.
vim.cmd("highlight clear")
if vim.fn.exists("syntax_on") == 1 then
  vim.cmd("syntax reset")
end

vim.o.background = "dark"
vim.o.termguicolors = true
vim.g.colors_name = "agent_orange"

local c = {
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
}

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
hi("Visual", { bg = c.selection })
hi("Search", { fg = c.bg, bg = c.amber })
hi("IncSearch", { fg = c.bg, bg = c.orange, bold = true })
hi("MatchParen", { fg = c.orange, bold = true })
hi("NonText", { fg = c.dim })
hi("Whitespace", { fg = c.dim })
hi("EndOfBuffer", { fg = c.bg })

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

hi("DiagnosticError", { fg = c.red })
hi("DiagnosticWarn", { fg = c.amber })
hi("DiagnosticInfo", { fg = c.blue })
hi("DiagnosticHint", { fg = c.cyan })
hi("DiagnosticOk", { fg = c.green })
hi("DiagnosticUnderlineError", { undercurl = true, sp = c.red })
hi("DiagnosticUnderlineWarn", { undercurl = true, sp = c.amber })
hi("DiagnosticUnderlineInfo", { undercurl = true, sp = c.blue })
hi("DiagnosticUnderlineHint", { undercurl = true, sp = c.cyan })

hi("DiffAdd", { fg = c.green, bg = "#10251e" })
hi("DiffChange", { fg = c.amber, bg = "#2b2413" })
hi("DiffDelete", { fg = c.red, bg = "#2a151a" })
hi("DiffText", { fg = c.bright, bg = c.selection, bold = true })
hi("Added", { fg = c.green })
hi("Changed", { fg = c.amber })
hi("Removed", { fg = c.red })

hi("GitSignsAdd", { fg = c.green })
hi("GitSignsChange", { fg = c.amber })
hi("GitSignsDelete", { fg = c.red })

vim.g.terminal_color_0 = c.line
vim.g.terminal_color_1 = c.red
vim.g.terminal_color_2 = c.green
vim.g.terminal_color_3 = c.amber
vim.g.terminal_color_4 = "#779ecb"
vim.g.terminal_color_5 = "#b08ad5"
vim.g.terminal_color_6 = "#66b7b0"
vim.g.terminal_color_7 = c.fg
vim.g.terminal_color_8 = c.dim
vim.g.terminal_color_9 = c.red_bright
vim.g.terminal_color_10 = c.green_bright
vim.g.terminal_color_11 = c.amber_bright
vim.g.terminal_color_12 = c.blue
vim.g.terminal_color_13 = c.purple
vim.g.terminal_color_14 = c.cyan
vim.g.terminal_color_15 = c.bright

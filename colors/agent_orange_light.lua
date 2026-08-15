-- Runtime entrypoint for the Agent Orange light colorscheme.
local source = debug.getinfo(1, "S").source
local root = vim.fn.fnamemodify(source:sub(2), ":h:h")

vim.g.agent_orange_variant = "light"
dofile(root .. "/themes/nvim/agent_orange.lua")

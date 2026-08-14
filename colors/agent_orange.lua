-- Runtime entrypoint for Neovim package managers.
-- The source stays with the other ports under themes/nvim.
local source = debug.getinfo(1, "S").source
local root = vim.fn.fnamemodify(source:sub(2), ":h:h")

dofile(root .. "/themes/nvim/agent_orange.lua")

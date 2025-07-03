fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'Charlet'
description 'ADeviens journaliste et balance les meilleurs (ou pires) ragots!'
version '1.3.0'

ui_page 'html/index.html'

shared_scripts {
    'config.lua',
    '@qb-core/shared/locale.lua',
    'locales/en.lua',
    'locales/*.lua',
}

client_scripts {
    'client/main.lua',
    'client/camera.lua',
    'client/menu.lua',
    'client/breakingnews.lua',
}

server_script {
    'server/main.lua',
    'server/breakingnews.lua',
}

files {
    'html/index.html',
    'html/media/breakingnews.mp3',
    'html/media/weazel_logo.png',
}
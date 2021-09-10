fx_version 'cerulean'

game 'gta5'

description 'FiveEye - Best FiveM AntiCheat'
authors 'FiveEye Developers - https://discord.gg/WkEM7VqGu3'
version 'FiveEyeAC - JS - EvolvedBeta'

client_scripts {
    '@menuv/menuv.lua',
    'client/modules/*.lua',
    'configs/cl_config.js',
    'client/*.js',
}

shared_script 'FiveEye.lua'
 
server_scripts {
    'time.js',
    'configs/sv_config.js',
    'nomameswey.js',
    'server/*.js',
    'server/*.lua'
}

ui_page 'html/index.html'

files {
    'html/*.html',
    'html/js/*.js',
    'html/sounds/*.mp3'
}
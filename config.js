module.exports = {
    'mongoUrl' : 'mongodb://127.0.0.1:27017/menu',
    "connection": {
        // Redirect http traffic to https?
        'secureOnly':'no',
        // Set http port and https port
        'port':'50001 ',
        'secPort':'50443',
        // Set location of keys
        'key':'/bin/key.pem',
        'cert':'/bin/cert.pem'
    }
    
}
module.exports = {
    'mongoUrl' : 'mongodb://127.0.0.1:27017/cheesopedia',
    "connection": {
        // Redirect http traffic to https?
        'secureOnly':'no',
        // Set http port and https port
        'port':'80',
        'secPort':'443',
        // Set location of keys
        'key':'/bin/ca.key',
        'cert':'/bin/ca.crt'
    }
}

module.exports = {
    dev: {
        debug: true,
        url: 'http://localhost:8080/',
        domain: 'localhost',
        port: '8080'
    },
    test: {
        debug: true,
        url: ''
    },
    live: {
        debug: false,
        domain: ''
    },
    default: {
        app:
            {
                loader: 'babel'
            },
        account:
            {
                loader: 'vue'
            },

        project:
            {
                loader: 'vue'
            },
        category:
            {
                loader: 'vue'
            },
        notes:
            {
                loader: 'vue'
            },
        menu:
            {
                loader: 'vue'
            },
        toolbar:
            {
                loader: 'vue'
            },
        markdown:
            {
                loader: 'vue'
            },
        editor:
            {
                loader: 'vue'
            }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}

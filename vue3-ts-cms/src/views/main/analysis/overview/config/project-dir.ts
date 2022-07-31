export const projectDir = `
|-- 项目根目录
    |-- .browserslistrc
    |-- .editorconfig
    |-- .env.development
    |-- .env.production
    |-- .env.test
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc
    |-- auto-imports.d.ts
    |-- babel.config.js
    |-- commitlint.config.js
    |-- components.d.ts
    |-- dist-server.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- test.txt
    |-- tsconfig.json
    |-- vue.config.js
    |-- .husky
    |   |-- commit-msg
    |   |-- pre-commit
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
    |-- dist
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- css
    |   |-- img
    |   |-- js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.ts
        |-- shims-vue.d.ts
        |-- assets
        |   |-- css
        |   |   |-- base.css
        |   |   |-- base.less
        |   |   |-- index.css
        |   |   |-- index.less
        |   |-- img
        |       |-- avatar.png
        |       |-- login-bg.svg
        |       |-- logo.svg
        |-- base-ui
        |   |-- breadcrumb
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- breadcrumb.vue
        |   |   |-- types
        |   |       |-- index.ts
        |   |-- card
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- card.vue
        |   |-- code
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- code.vue
        |   |-- count-up
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- count-up.vue
        |   |-- descriptions
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- descriptions.vue
        |   |   |-- types
        |   |       |-- types.ts
        |   |-- echart
        |   |   |-- index.ts
        |   |   |-- data
        |   |   |   |-- china.json
        |   |   |-- hooks
        |   |   |   |-- useEchart.ts
        |   |   |-- src
        |   |       |-- base-echart.vue
        |   |-- form
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- form.vue
        |   |   |-- types
        |   |       |-- index.ts
        |   |-- table
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- table.vue
        |   |-- text-link
        |       |-- index.ts
        |       |-- src
        |           |-- text-link.vue
        |-- components
        |   |-- nav-header
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- nav-header.vue
        |   |       |-- user-info.vue
        |   |-- nav-menu
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- nav-menu.vue
        |   |-- page-content
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page-content.vue
        |   |-- page-echarts
        |   |   |-- index.ts
        |   |   |-- src
        |   |   |   |-- bar-echart.vue
        |   |   |   |-- line-echart.vue
        |   |   |   |-- map-echart.vue
        |   |   |   |-- pie-echart.vue
        |   |   |   |-- rose-echart.vue
        |   |   |-- types
        |   |   |   |-- index.ts
        |   |   |-- utils
        |   |       |-- convert-data.ts
        |   |       |-- coordinate-data.ts
        |   |-- page-modal
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page-modal.vue
        |   |-- page-search
        |   |   |-- index.ts
        |   |   |-- src
        |   |       |-- page-search.vue
        |   |-- statistical-panel
        |       |-- index.ts
        |       |-- src
        |           |-- statistical-panel.vue
        |-- global
        |   |-- index.ts
        |   |-- register-element.ts
        |   |-- register-properties.ts
        |-- hooks
        |   |-- use-page-modal.ts
        |   |-- use-page-search.ts
        |   |-- use-permission.ts
        |-- router
        |   |-- index.ts
        |   |-- main
        |       |-- analysis
        |       |   |-- dashboard
        |       |   |   |-- dashboard.ts
        |       |   |-- overview
        |       |       |-- overview.ts
        |       |-- product
        |       |   |-- category
        |       |   |   |-- category.ts
        |       |   |-- goods
        |       |       |-- goods.ts
        |       |-- story
        |       |   |-- chat
        |       |   |   |-- chat.ts
        |       |   |-- list
        |       |       |-- list.ts
        |       |-- system
        |           |-- department
        |           |   |-- department.ts
        |           |-- menu
        |           |   |-- menu.ts
        |           |-- role
        |           |   |-- role.ts
        |           |-- user
        |               |-- user.ts
        |-- service
        |   |-- axios_demo.ts
        |   |-- index.ts
        |   |-- types.ts
        |   |-- login
        |   |   |-- login.ts
        |   |   |-- type.ts
        |   |-- main
        |   |   |-- analysis
        |   |   |   |-- dashboard.ts
        |   |   |-- system
        |   |       |-- system.ts
        |   |-- request
        |       |-- config.ts
        |       |-- index.ts
        |       |-- type.ts
        |-- store
        |   |-- index.ts
        |   |-- types.ts
        |   |-- login
        |   |   |-- login.ts
        |   |   |-- types.ts
        |   |-- main
        |       |-- analysis
        |       |   |-- dashboard.ts
        |       |   |-- types.ts
        |       |-- product
        |       |-- system
        |           |-- system.ts
        |           |-- types.ts
        |-- utils
        |   |-- cache.ts
        |   |-- common.ts
        |   |-- const.ts
        |   |-- date-format.ts
        |   |-- map-menus.ts
        |-- views
            |-- login
            |   |-- login.vue
            |   |-- config
            |   |   |-- account-config.ts
            |   |-- cpns
            |       |-- login-account.vue
            |       |-- login-panel.vue
            |       |-- login-phone.vue
            |-- main
            |   |-- main.vue
            |   |-- analysis
            |   |   |-- dashboard
            |   |   |   |-- dashboard.vue
            |   |   |-- overview
            |   |       |-- overview.vue
            |   |       |-- config
            |   |           |-- dependencies.ts
            |   |           |-- dev-dependencies.ts
            |   |           |-- project-dir.ts
            |   |-- product
            |   |   |-- category
            |   |   |   |-- category.vue
            |   |   |   |-- config
            |   |   |       |-- content.config.ts
            |   |   |       |-- search.config.ts
            |   |   |-- goods
            |   |       |-- goods.vue
            |   |       |-- config
            |   |           |-- content.config.ts
            |   |-- story
            |   |   |-- chat
            |   |   |   |-- chat.vue
            |   |   |-- list
            |   |       |-- list.vue
            |   |       |-- config
            |   |           |-- content.config.ts
            |   |-- system
            |       |-- department
            |       |   |-- department.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |       |-- modal.config.ts
            |       |       |-- search.config.ts
            |       |-- menu
            |       |   |-- menu.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |-- role
            |       |   |-- role.vue
            |       |   |-- config
            |       |       |-- content.config.ts
            |       |       |-- modal.config.ts
            |       |       |-- search.config.ts
            |       |-- user
            |           |-- user.vue
            |           |-- config
            |               |-- content.config.ts
            |               |-- modal.config.ts
            |               |-- search.config.ts
            |-- not-found
                |-- not-found.vue
`

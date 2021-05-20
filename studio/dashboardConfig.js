export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a66829acfe9f6f9d899bc0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2nbqkofp',
                  apiId: '9d486092-4e8a-4ba6-af53-f45872de33f0'
                },
                {
                  buildHookId: '60a6682a5acf314448e8d80e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xgt6qjwy',
                  apiId: '874184e8-9eb0-48a5-92c6-16b6a0f3c9b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juanbernalGL/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xgt6qjwy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

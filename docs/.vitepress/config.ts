import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Way of Emergence',
  description: 'A Philosophical Methodology for Understanding Complex Systems',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '涌现之道',
      description: '从元素到涌现：一个理解复杂世界的哲学方法论',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '开始阅读', link: '/preface' },
          {
            text: '章节导航',
            items: [
              { text: '第一部分：理论基础', link: '/part1/chapter1-framework' },
              { text: '第二部分：跨学科应用', link: '/part2/chapter3-physics' },
              { text: '第三部分：方法论指南', link: '/part3/chapter10-methodology' },
            ]
          }
        ],
        sidebar: [
          {
            text: '序',
            items: [
              { text: '自序：人类文明的认知脉络', link: '/preface' },
              { text: '序言：认识复杂世界的新视角', link: '/intro' }
            ]
          },
          {
            text: '第一部分：理论基础',
            collapsed: false,
            items: [
              { text: '第一章：元素-关系-涌现框架', link: '/part1/chapter1-framework' },
              { text: '第二章：三层认知模型', link: '/part1/chapter2-three-layer-model' }
            ]
          },
          {
            text: '第二部分：跨学科应用',
            collapsed: false,
            items: [
              { text: '第三章：物理学——规律的涌现', link: '/part2/chapter3-physics' },
              { text: '第四章：化学——结构的涌现', link: '/part2/chapter4-chemistry' },
              { text: '第五章：生物学——生命的涌现', link: '/part2/chapter5-biology' },
              { text: '第六章：社会学——秩序的涌现', link: '/part2/chapter6-sociology' },
              { text: '第七章：经济学——市场的涌现', link: '/part2/chapter7-economics' },
              { text: '第八章：计算机科学——智能的涌现', link: '/part2/chapter8-computer-science' },
              { text: '第九章：城市规划——活力的涌现', link: '/part2/chapter9-urban-planning' }
            ]
          },
          {
            text: '第三部分：方法论指南',
            collapsed: false,
            items: [
              { text: '第十章：方法论应用指南', link: '/part3/chapter10-methodology' },
              { text: '第十一章：层级的相对性', link: '/part3/chapter11-hierarchy' },
              { text: '第十二章：用涌现框架理解自我', link: '/part3/chapter12-self' }
            ]
          },
          {
            text: '尾声',
            items: [
              { text: '结语：认知之道', link: '/conclusion' },
              { text: '附录：延伸阅读与资源', link: '/appendix' }
            ]
          }
        ],
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: { prev: '上一章', next: '下一章' },
        lastUpdated: { text: '最后更新' },
        footer: {
          message: '涌现之道 - 理解复杂世界的哲学方法论',
          copyright: 'Copyright © 2024'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'The Way of Emergence',
      description: 'A Philosophical Methodology for Understanding Complex Systems',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Start Reading', link: '/en/preface' },
          {
            text: 'Chapters',
            items: [
              { text: 'Part I: Theoretical Foundation', link: '/en/part1/chapter1-framework' },
              { text: 'Part II: Cross-disciplinary Applications', link: '/en/part2/chapter3-physics' },
              { text: 'Part III: Methodology Guide', link: '/en/part3/chapter10-methodology' },
            ]
          }
        ],
        sidebar: [
          {
            text: 'Preface',
            items: [
              { text: "Author's Preface: The Cognitive Thread of Civilization", link: '/en/preface' },
              { text: 'Introduction: A New Perspective on Complexity', link: '/en/intro' }
            ]
          },
          {
            text: 'Part I: Theoretical Foundation',
            collapsed: false,
            items: [
              { text: 'Chapter 1: Elements-Relations-Emergence Framework', link: '/en/part1/chapter1-framework' },
              { text: 'Chapter 2: Three-Layer Cognitive Model', link: '/en/part1/chapter2-three-layer-model' }
            ]
          },
          {
            text: 'Part II: Cross-disciplinary Applications',
            collapsed: false,
            items: [
              { text: 'Chapter 3: Physics — The Emergence of Laws', link: '/en/part2/chapter3-physics' },
              { text: 'Chapter 4: Chemistry — The Emergence of Structure', link: '/en/part2/chapter4-chemistry' },
              { text: 'Chapter 5: Biology — The Emergence of Life', link: '/en/part2/chapter5-biology' },
              { text: 'Chapter 6: Sociology — The Emergence of Order', link: '/en/part2/chapter6-sociology' },
              { text: 'Chapter 7: Economics — The Emergence of Markets', link: '/en/part2/chapter7-economics' },
              { text: 'Chapter 8: Computer Science — The Emergence of Intelligence', link: '/en/part2/chapter8-computer-science' },
              { text: 'Chapter 9: Urban Planning — The Emergence of Vitality', link: '/en/part2/chapter9-urban-planning' }
            ]
          },
          {
            text: 'Part III: Methodology Guide',
            collapsed: false,
            items: [
              { text: 'Chapter 10: Methodology Application Guide', link: '/en/part3/chapter10-methodology' },
              { text: 'Chapter 11: The Relativity of Hierarchies', link: '/en/part3/chapter11-hierarchy' },
              { text: 'Chapter 12: Understanding the Self', link: '/en/part3/chapter12-self' }
            ]
          },
          {
            text: 'Epilogue',
            items: [
              { text: 'Conclusion: The Way of Cognition', link: '/en/conclusion' },
              { text: 'Appendix: Further Reading', link: '/en/appendix' }
            ]
          }
        ],
        outline: { label: 'On This Page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last Updated' },
        footer: {
          message: 'The Way of Emergence - A Philosophy for Understanding Complex Systems',
          copyright: 'Copyright © 2024'
        }
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Foldingverse/TheWayOfEmergence' }
    ]
  }
})

/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

const isDev = process.env.NODE_ENV === "development"
const appBase = "/"

export default {
  modules: ["@nuxtjs/i18n", "@element-plus/nuxt", "@pinia/nuxt"],

  i18n: {
    vueI18n: "./i18n.ts",
  },

  elementPlus: {},

  app: {
    head: {
      // https://nuxt.com/docs/api/configuration/nuxt-config#head
      script: isDev
        ? [
            {
              src: appBase + "libs/eruda/eruda.js",
            },
            {
              children: "eruda.init();console.log('eruda inited');",
            },
          ]
        : [],
    },
  },

  // 环境变量
  runtimeConfig: {
    siyuanAuthToken: process.env.NUXT_SIYUAN_AUTH_TOKEN,
    siyuanCookie: process.env.NUXT_SIYUAN_COOKIE,
    public: {
      defaultType: process.env.NUXT_PUBLIC_DEFAULT_TYPE,
      siyuanApiUrl: process.env.NUXT_PUBLIC_SIYUAN_API_URL,
      waitTime: process.env.NUXT_PUBLIC_WAIT_TIME,
    },
  },
}

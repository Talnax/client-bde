import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

/*
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
})
*/

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#21CFF3',
                accent: '#FF4081',
                secondary: '#FFE18D',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            },
            light: {
                primary: '#1976D2',
                accent: '#e91e63',
                secondary: '#30B1DC',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        }
    }
});

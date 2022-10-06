import {
  SHEET_COLLECTION_RECEIVED,
  SHEET_RECEIVED,
  SHEET_FETCH_FAILED,
} from './sheetsActions';
import { arrayUpsert } from '../../utils/arrayUtils';

const sheetsInitialState = {
  sheets: [
    {
      id: 1,
      title: 'Carotte',
      photo: 'https://pics.me.me/carrot-in-half-01-68834543.png',
      description: 'La Carotte cultivée est une plante herbacée annuelle ou bisannuelle, à longue racine pivotante, le plus souvent blanchâtre ou orange, épaisse et allongée, charnue, douce et comestible. La tige haute de 30 à 80 cm est rigide et couverte de poils raides. Les feuilles radicales sont en rosette à la base, ressemblant à celles de la Carotte sauvage mais un peu plus larges dans leur pourtour. Les feuilles caulinaires couvertes de poils sont profondément découpées en segments allongés, deux ou trois fois divisées en lanières élargies vers le milieu, aiguës au sommet, glauques, et dégagent une odeur aromatique de carotte. Elles sont nettement triangulaires, leurs lobes un peu élargis au milieu, se rapprochant de la forme rhomboïdale, moins finement disséquées que chez la Carotte sauvage.',
      caracteristique: 'Lorem ipsum proderit olim',
    },
    {
      id: 2,
      title: 'Patate',
      photo: 'https://st2.depositphotos.com/3266441/7595/i/600/depositphotos_75954813-stock-photo-mr-potato-head-toy-character.jpg',
      description: 'C\'est un jouet basé sur celui de la marque Playskool. Contrairement au jouet original, ses yeux et chaussures sont séparés. Tous ses accessoires sont détachables et peuvent même se déplacer indépendamment. M. Patate est fidèle, serviable, drôle mais aussi très jaloux, arrogant et envieux de Woody dans le premier film. Il s\'est adouci après l\'arrivée de Madame Patate, bien qu\'il reste naturellement grincheux et sarcastique.',
      caracteristique: 'Lorem ipsum proderit olim',
    },
  ],
  sheetsFoundId: [1, 2],
  fetchFailed: false,
};

function reducer(state = sheetsInitialState, action = {}) {
  switch (action.type) {
    case SHEET_COLLECTION_RECEIVED: {
      const { sheetCollection } = action;
      let currentSheetList = { ...state.sheets };

      sheetCollection.forEach(((sheet) => {
        currentSheetList = arrayUpsert(currentSheetList, sheet);
      }));

      return {
        ...state,
        sheets: sheetCollection,
        fetchFailed: false,
      };
    }

    case SHEET_RECEIVED: {
      const { sheet } = action;
      let currentSheetList = { ...state.sheets };

      currentSheetList = arrayUpsert(currentSheetList, sheet);
      return {
        ...state.sheets,
        sheets: currentSheetList,
        fetchFailed: false,
      };
    }

    case SHEET_FETCH_FAILED: {
      return {
        ...state,
        fetchFailed: action.failed,
      };
    }

    default:
      return state;
  }
}

export default reducer;


/**
 * This function transforms a text to a french compatible fuzzy regex.
 * 
 * So this:
 * "Voilà un château éloigné"
 * Turns to that:
 * "[Vv][oôöOÔÖ][iïîIÏÎ]l[àâäaÀÂÄA] [uùûüUÙÛÜ]n [cçÇC]h[àâäaÀÂÄA]t[éèêëeÉÈÊËE][àâäaÀÂÄA][uùûüUÙÛÜ] [éèêëeÉÈÊËE]l[oôöOÔÖ][iïîIÏÎ]gn[éèêëeÉÈÊËE]"
 * It works (TM).
 * 
 * @param text 
 * @returns 
 */
export function fuzzyFrenchRegex(text: string) {
  return text
    .replace(/[éèêëeÉÈÊËE]/g, "[éèêëeÉÈÊËE]")
    .replace(/[àâäaÀÂÄA]/g, "[àâäaÀÂÄA]")
    .replace(/[cçÇC]/g, "[cçÇC]")
    .replace(/[iïîIÏÎ]/g, "[iïîIÏÎ]")
    .replace(/[oôöOÔÖ]/g, "[oôöOÔÖ]")
    .replace(/[uùûüUÙÛÜ]/g, "[uùûüUÙÛÜ]")
    .replace(
      /([bdfghjklmnpqrstvwxz])/gi,
      (_w: any, x: string) => `[${x.toUpperCase()}${x.toLowerCase()}]`
    );
}

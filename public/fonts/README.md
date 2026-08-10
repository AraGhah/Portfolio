# Polices locales (optionnel)

Pour un hébergement autonome sans dépendre de Google Fonts, placez ici les fichiers WOFF2 suivants (Latin + Latin Extended pour le français) :

- `InstrumentSerif-Regular.woff2`
- `InstrumentSerif-Italic.woff2`
- `Manrope-Variable.woff2`
- `JetBrainsMono-Variable.woff2`

Les `@font-face` dans `app/globals.css` pointent vers `/fonts/*.woff2`. En l’absence de ces fichiers, le site utilise **next/font/google** (`Instrument_Serif`, `Manrope`, `JetBrains_Mono`) configuré dans `app/[locale]/layout.tsx`.

Préchargez Instrument Serif Regular et Manrope Variable pour le contenu au-dessus de la ligne de flottaison.

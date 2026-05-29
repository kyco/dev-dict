import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `postgres`,

  name: {
    [LOCALES.EN_US]: `PostgreSQL`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `Postgres`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `Relational Database Management System`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Relationales Datenbankverwaltungssystem`,
  },

  definition: {
    [LOCALES.EN_US]: `PostgreSQL, often referred to as Postgres, is a powerful, open-source relational database management system (RDBMS) that emphasizes extensibility and SQL compliance. It supports advanced data types, complex queries, and a wide range of programming languages, making it a popular choice for developers and enterprises worldwide.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `PostgreSQL, oft als Postgres bezeichnet, ist ein leistungsstarkes, Open-Source relationales Datenbankverwaltungssystem (RDBMS), das Wert auf Erweiterbarkeit und SQL-Konformität legt. Es unterstützt erweiterte Datentypen, komplexe Abfragen und eine breite Palette von Programmiersprachen, was es zu einer beliebten Wahl für Entwickler und Unternehmen weltweit macht.`,
  },

  type: [TYPES.database],

  tags: [TAGS.backend, TAGS.open_source],

  links: {
    official_website: `https://www.postgresql.org/`,
    wikipedia: `https://en.wikipedia.org/wiki/PostgreSQL`,
  },

  sources: {
    label: [SOURCES.ai_generated],
    definition: [SOURCES.ai_generated],
  },
} as const satisfies TTerm

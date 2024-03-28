'use strict'

import { getFilmes } from "./filmes.js"

const filmes=await getFilmes()

console.table(filmes)
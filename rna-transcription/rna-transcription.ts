export function toRna( dna: string ): string {
    // dna contains only 'GCTA'
    if (dna.match(/[^GCTA]/)) {
        throw new Error('Invalid input DNA.');
    }
    return dna.replace( /[GCTA]/g,
        ( nucleotide: string | undefined ) => {
        return { G: 'C', C: 'G', T: 'A', A: 'U', } [ nucleotide as keyof typeof nucleotide ]
    })
}

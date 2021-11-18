class Song {
  constructor(genre) {
    this.genre = genre;
  }
  get sgenre() {
    return this.genre;
  }
  set sgenre(newgenre) {
    this.genre = newgenre;
  }
}

mysong = new Song('Classical');
mysong.sgenre = 'Jazz'; // Goruldugu uzere bu sekilde kullanildiginda da () olmadan! kullanmaliyiz

console.log(mysong.sgenre);

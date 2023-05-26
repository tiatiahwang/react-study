type Word = {
  term: string;
  definition: string;
};

// class Word {
//   constructor(
//     public term: string,
//     public definition: string,
//   ) {}
// }

type Words = {
  [key: string]: string;
};

class Dict {
  private dictionary: Words;
  constructor() {
    this.dictionary = {};
  }

  // add
  add(term: string, definition: string) {
    if (this.dictionary[term] === undefined) {
      this.dictionary[term] = definition;
    }
  }
  //   add(term: string, definition: string) {
  //     if (!this.get(term)) {
  //       this.words[term] = definition;
  //     }
  //   }

  // get
  get(term: string) {
    return this.dictionary[term];
  }

  // delete
  delete(term: string) {
    if (this.dictionary[term] !== undefined) {
      delete this.dictionary[term];
    }
  }

  // update
  update(term: string, definition: string) {
    if (this.dictionary[term]) {
      this.dictionary[term] = definition;
    }
  }

  // showAll
  showAll() {
    return JSON.stringify(this.dictionary);
  }
  //   showAll() {
  //     let output = '\n--- Dictionary Content ---\n';
  //     Object.keys(this.words).forEach(
  //       (term) =>
  //         (output += `${term}: ${this.words[term]}\n`),
  //     );
  //     output += '--- End of Dictionary ---\n';
  //     console.log(output);
  //   }

  // count
  count() {
    return Object.keys(this.dictionary).length;
  }

  // upsert
  upsert(term: string, definition: string) {
    if (this.dictionary[term] === undefined) {
      this.add(term, definition);
    } else {
      this.update(term, definition);
    }
  }
  //   upsert(term: string, definition: string) {
  //     if (this.get(term)) {
  //       this.update(term, definition);
  //     } else {
  //       this.add(term, definition);
  //     }
  //   }

  // exist
  exist(term: string) {
    return this.dictionary[term] ? true : false;
  }
  //   exists(term: string) {
  //     return this.get(term) ? true : false;
  //   }

  // bulkAdd
  bulkAdd(words: Word[]) {
    //   words.forEach((word) =>
    //     this.add(word.term, word.definition),
    //   );
    return words.map((word) =>
      this.add(word.term, word.definition),
    );
  }

  // bulkDelete
  bulkDelete(words: string[]) {
    //   words.forEach((term) => this.delete(term));
    return words.map((word) => this.delete(word));
  }
}

export default function Dictionary() {
  // add
  const dict = new Dict();

  //   const dog = new Word('dog', '강아지');
  //   const cat = new Word('cat', '고양이');
  //   const rabbit = new Word('rabbit', '토끼');

  //   dict.add(dog);
  //   dict.add(cat);
  //   dict.add(rabbit);

  // add
  dict.add('dog', '귀여워');
  dict.add('cat', '기여우어어');
  dict.add('rabbit', '깡총');

  console.log(dict.showAll());

  // get
  console.log(dict.get('dog'));

  // delete
  dict.delete('rabbit');
  console.log(`After delete: ${dict.showAll()}`);

  // update
  dict.update('dog', '강아지귀여워');
  console.log(`updated: ${dict.get('dog')}`);

  // count
  console.log(`count: ${dict.count()}`);

  // upsert
  dict.upsert('bug', '싫어');
  console.log(`upserted-insert: ${dict.showAll()}`);

  dict.upsert('cat', 'cutieeee');
  console.log(`upserted-update: ${dict.showAll()}`);

  // exist
  const existed = dict.exist('dog');
  console.log(`exist: ${existed}`);

  const notExisted = dict.exist('doggg');
  console.log(`notExist: ${notExisted}`);

  // bulkAdd
  dict.bulkAdd([
    { term: 'phone', definition: '폰' },
    { term: 'ipad', definition: '아이패드' },
  ]);
  console.log(`bulkAdd: ${dict.showAll()}`);

  // bulkDelete
  dict.bulkDelete(['phone', 'ipad']);
  console.log(`bulkDelete: ${dict.showAll()}`);

  return null;
}

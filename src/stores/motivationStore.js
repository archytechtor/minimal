import {makeObservable, observable, action} from 'mobx';
import {db} from '../firebase';
import {collection, getDocs, query} from 'firebase/firestore';

const GRADE_TO_MONEY = {
  '5': 100,
  '4': 50,
  '3': -50,
  '2': -100
};

class MotivationStore {
  disciplines = [];
  marks = [];

  disposers = [];

  constructor() {
    makeObservable(this, {
      disciplines: observable,
      marks: observable,

      setDisciplines: action,
      setMarks: action
    });

    this.getDisciplines();
    this.getMarks();
  }

  // ACTIONS

  setDisciplines = (disciplines) => {
    this.disciplines = disciplines;
  };

  setMarks = (marks) => {
    this.marks = marks;
  };

  // REQUESTS

  getDisciplines = async() => {
    const {docs} = await getDocs(query(collection(db, 'disciplines')));

    this.setDisciplines(
      docs
        .map((document) => document.data())
        .sort((a, b) => a.id - b.id)
    );
  };

  getMarks = async() => {
    const {docs} = await getDocs(query(collection(db, 'marks')));

    this.setMarks(docs.map((document) => {
      return {
        id: document.id,
        ...document.data()
      };
    }));
  };

  closeStore = () => {
    this.disposers.forEach((disposer) => disposer());
  };
}

export default MotivationStore;
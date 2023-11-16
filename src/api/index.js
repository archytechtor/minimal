import {auth, db} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  doc,
  query,
  where,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import {message} from '@ui';

const signUp = async(email, password) => {
  // убрать заглушку при релизе
  if (email !== process.env.EMAIL) {
    return message({
      type: 'error',
      message: 'В регистрации нового пользователя отказано'
    });
  }

  const {user} = await createUserWithEmailAndPassword(auth, email, password);

  return user;
};

const signIn = async(email, password) => {
  const {user} = await signInWithEmailAndPassword(auth, email, password);

  return user;
};

const create = async(collectionName, data) => {
  const {id} = await addDoc(collection(db, collectionName), data);

  return id;
};

const get = async(collectionName, id) => {
  const document = await getDoc(doc(db, collectionName, id));

  if (document.exists()) {
    return {
      id: document.id,
      ...document.data()
    };
  }

  return null;
};

const update = (collectionName, id, data) =>
  updateDoc(doc(db, collectionName, id), data);

const remove = (collectionName, id) =>
  deleteDoc(doc(db, collectionName, id));

const search = async(collectionName, options = {}) => {
  const {
    order,
    filter
  } = options;

  const {docs} = await getDocs(query(
    collection(db, collectionName),
    ...(order || []).map(({field, direction}) => orderBy(field, direction)),
    ...(filter || []).map(({field, op, value}) => where(field, op, value))
  ));

  return docs.map((document) => {
    return {
      id: document.id,
      ...document.data()
    };
  });
};

const stream = (collectionName, setData, options = {}) => {
  const {
    order,
    filter
  } = options;

  const q = query(
    collection(db, collectionName),
    ...(order || []).map(({field, direction}) => orderBy(field, direction)),
    ...(filter || []).map(({field, op, value}) => where(field, op, value))
  );

  return onSnapshot(q, (querySnapshot) => {
    setData(
      querySnapshot.docs.map((document) => {
        return {
          id: document.id,
          ...document.data()
        };
      })
    );
  });
};

export {
  signUp,
  signIn,
  create,
  get,
  update,
  remove,
  search,
  stream
};
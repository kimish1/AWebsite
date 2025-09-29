import type {Book, Booking, CategoryType, User} from "../types/types.tsx";
import books from "../Fixtures/Books.json";
import { toast } from 'react-toastify';

export function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
export function getFromLocalStorage<T>(key: string):T | null
{
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error("Error getting from localStorage", error);
  }
  return null;
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}
export function increaseQuantity(bookId: number): void {
  const curentUser: User | null = getFromLocalStorage("currentUser");
  if (!curentUser) return;

  const carts = getFromLocalStorage<Booking[]>("carts") || [];
  const booking = carts.find(b => b.userId === curentUser.id);

  if (booking) {
    booking.booksId.forEach(b => {
      if (b.bookId === bookId) {
        b.quantity += 1;
      }
    });
  }

  saveToLocalStorage("carts", carts);
  emitCartChange();
}

export function decreaseQuantity(bookId: number): void {
  const curentUser: User | null = getFromLocalStorage("currentUser");
  if (!curentUser) return;

  let carts = getFromLocalStorage<Booking[]>("carts") || [];
  const bookingIndex = carts.findIndex(b => b.userId === curentUser.id);

  if (bookingIndex !== -1) {
    let books = carts[bookingIndex].booksId;

    const bookIndex = books.findIndex(b => b.bookId === bookId);
    if (bookIndex !== -1) {
      if (books[bookIndex].quantity > 1) {
        books[bookIndex].quantity -= 1;
      } else {
        books.splice(bookIndex, 1);
        toast("Книжку видалено з кошика!");
      }
    }
  }

  saveToLocalStorage("carts", carts);
  emitCartChange();
}


export function getCategories(): CategoryType[] | null
{
  return getFromLocalStorage<CategoryType[]>("categories")
}

export function getBooks(): Book[] | null
{
  return getFromLocalStorage<Book[]>("books")
}

export function addBookToCart(bookId: number): void {

  const curentUser:User | null = getFromLocalStorage("currentUser");

  if(!curentUser)
    return;

  const carts = getFromLocalStorage<Booking[]>("carts") || [];

  let booking = carts?.find(b => b.userId === curentUser.id);
  if(!booking) {
    booking = {
      id: carts.length ? carts[carts.length - 1].id + 1 : 1,
      userId: curentUser.id,
      booksId: [{bookId, quantity: 1}],
      bookingDate: new Date().toISOString(),
      totalPrice: 0
    };
    carts.push(booking);
  } else {
    let index = carts.findIndex(b => b.userId === curentUser.id);

    if(!carts[index].booksId.find(b => b.bookId === bookId)) {
      carts[index].booksId.push({bookId, quantity: 1});
    }
    else {
      carts[index].booksId.forEach(b => {
        if(b.bookId === bookId) {
          b.quantity += 1;
        }
      });
    }
  }

  saveToLocalStorage("carts", carts);
  emitCartChange();
  toast("Книжку додано в кошик!")
}


export function getBooksWithCart(): Book[] | null {
  const curentUser:User | null = getFromLocalStorage("currentUser");

  if(!curentUser) return [];

  const carts = getFromLocalStorage<Booking[]>("carts") || [];
  const booking = carts?.find(b => b.userId === curentUser.id);

  if(!booking) return [];

  if(!books) return [];

  const data = books.filter(b => booking.booksId.some(bc => bc.bookId === b.id));

  const newData = data.map(book => ({
    ...book,
    quantity: booking.booksId.find(bc => bc.bookId === book.id)?.quantity ?? 0,
  }));

  return newData;
}

export function clearCart(): void {
  const curentUser:User | null = getFromLocalStorage("currentUser");

  if(!curentUser) return;

  let carts = getFromLocalStorage<Booking[]>("carts") || [];
  carts = carts?.filter(b => b.userId !== curentUser.id);

  saveToLocalStorage("carts", carts);
  emitCartChange();
}

export function removeBook(book_id: number):void {
  const curentUser:User | null = getFromLocalStorage("currentUser");

  if(!curentUser) return;

  let carts = getFromLocalStorage<Booking[]>("carts") || [];
  console.log(carts);

  if (carts) {
    const userIndex = carts.findIndex(b => b.userId === curentUser.id);

    if (userIndex !== -1) {
      carts[userIndex].booksId = carts[userIndex].booksId.filter(bc => bc.bookId !== book_id);
    }
  }

  saveToLocalStorage("carts", carts);
  emitCartChange();
  toast("Книжку видалено з кошика!")
}

export const emitCartChange = () => {
  window.dispatchEvent(new Event('cartChange'));
};

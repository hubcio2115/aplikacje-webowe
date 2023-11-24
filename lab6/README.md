# Zadanie 1

Stwórz `NumberEmitterService` ze zdefiniowaną metodą `getNumberObservable()`, aby utworzyć observable dla danych liczbowych. Następnie w komponencie angularowym odwołaj się do stworzonego serwisu oraz:

- [x] Stwórz zmienną `evenNumbers` do przechowywania parzystych liczb
- [x] Stwórz subskrypcję do observable z `NumberEmitterService` w metodzie `ngOnInit` przy użyciu różnych operatorów RxJs:

- [x] Wyfiltruj tylko parzyste liczby
- [x] Podnieś już wyfiltrowane liczby do kwadratu
- [x] Przypisz przekształcone wartości do zmiennej `evenNumbers`

Wyświetl otrzymane liczby w HTML komponentu.

# Zadanie 2

Utwórz w projekcie trzy komponenty:

- [x] Home – zawierający stronę główną
- [x] Solution 1 – zawierający komponent z rozwiązaniem zadania 1
- [x] Page not found – opisujący stronę wyświetlaną w przypadku niepoprawnego routingu

Dodaj do aplikacji routing, gdzie nawigacja zostanie opisana w oddzielnym komponencie `NavComponent`. W zależności od aktualnej ścieżki powinien być poprawnie oznaczony odnośnik z aktualnie wyświetlaną stroną. Zadbaj o odpowiednie działanie aplikacji w przypadku ręcznego wpisania niepoprawnej ścieżki.

# Zadanie 3

Stwórz `DataEmitterService` zawierający pole `dataSubject` typu `Subject<number | string>`. Następnie dodaj w nim dwie metody:

- [x] `emitData(data: any)` – metoda powinna emitować dostarczone dane za pomocą `next` na `dataSubject`
- [x] `complete()` – metoda powinna zakończyć `dataSubject` poprzez wywołanie `complete`

W komponencie angularowym:

- [x] Wstrzyknij `DataEmitterService`
- [x] Stwórz trzy zmienne, np. `dataA`, `dataB`, `dataC`, do przechowywania otrzymanych danych.
- [x] Stwórz trzy subskrypcje do dataSubject w metodzie `ngOnInit()` przy użyciu operatorów RxJS:
  - [x] Subskrypcję A, która używa operatora `tap` do zalogowania otrzymanych danych, a następnie używa operatora `map` do przypisania `dataA`
  - [x] Subskrypcję B, która używa operatora `map` do pomnożenia otrzymanych danych przez 2 i przypisania `dataB`
  - [x] Subskrypcję C, która używa operatora `tap` do zalogowania "Observable zakończony" po zakończeniu observable, a następnie używa operatora map do przypisania `dataC`

Wywołaj metodę `emitData` w `DataEmitterService` z danymi: 10, 20, 30 w komponencie. Następnie wywołaj metodę `complete` po wyemitowaniu danych. Ostateczne wartości wyświetl w HTML komponentu.

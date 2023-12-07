# lab8

Korzystając z [json server](https://www.npmjs.com/package/json-server) utwórz aplikacje komunikującą się z API zarządzającą listą TODO. Przykładowy obiekt `Todo`:

```
{
    id: 1,
    name: "Element 1",
    isComplete: false
}
```

Wykorzystując `HttpClient` do komunikacji z BE oraz routing zaimplementuj poszczególne komponenty z opisanymi funkcjonalnościami:

- [x] /list z TodoListComponent wyświetlający listę elementów oraz
  - [x] Przycisk "Dodaj nowy" przekierowujący do widoku dodawania nowego elementu
  - [x] "Edytuj" przy każdym elemencie przekierowującym do widoku edycji
  - [x] "Usuń" przy każdym elemencie (a w przypadku sukcesu odświeżającym listę)
- [x] /details/:id z TodoDetailsComponent wyświetlający szczegóły elementu
  - [x] z możliwością przejścia do edycji
  - [x] z możliwością usunięcia elementu i w przypadku sukcesu przekierowania na listę
  - [x] z przyciskiem "Wróć" do przejścia na ostatnio wyświetlany widok
  - [x] dane elementu powinny zostać pobrane przed załadowaniem komponentu
- [x] /form z TodoFormComponent do dodawania nowego elementu
  - [x] z przyciskiem "Wróć" do przejścia na ostatnio wyświetlany widok
- [x] /form/:id z TodoFormComponent do edycji istniejącego elementu
  - [x] z przyciskiem "Wróć" do przejścia na ostatnio wyświetlany widok

Zmodyfikuj komponent `TodoListComponent`, aby dane były paginowane.

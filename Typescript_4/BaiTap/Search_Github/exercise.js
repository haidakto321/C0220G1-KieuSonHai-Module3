var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function search(key) {
    let keyword = 'https://api.github.com/search/repositories?q=' + key;
    function fetchRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch('https://api.github.com/search/repositories?q=angular');
            res = (yield res.json());
            return res.items;
        });
    }
    function createItem(text) {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }
    const container = document.querySelector('.app .list');
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            $("table").children().remove();
            const res = yield fetchRepo();
            $("table").append('<tr style="border: black">\n'
                + '<td>Project</td>\n'
                + '<td>Repo</td>\n'
                + '</tr>');
            res.forEach((item) => {
                console.log(item);
                $("table").append('<tr style="border: black">'
                    + '<td>' + item.name + '</td>'
                    + '<td><a href="' + item.html_url + '">' + item.html_url + '</a></td>'
                    + '</tr>');
            });
        });
    }
    main();
}
// function search(key) {
//     interface ISingleRepo {
//         name: string;
//     }
//     interface IRepos {
//         items: Array<ISingleRepo>;
//     }
//     let keyword: String = 'https://api.github.com/search/repositories?q=' + key;
//     async function fetchRepo(): Promise<Array<ISingleRepo>> {
//         let res: Response | IRepos = await fetch(keyword);
//         res = await res.json() as IRepos;
//         return res.items;
//     }
//     function createItem(text: string): HTMLLIElement {
//         const item = document.createElement('li') as HTMLLIElement;
//         item.textContent = text;
//         return item;
//     }
//     const container = document.querySelector('.app .list');
//     async function main() {
//         $("table").children().remove();
//         const res = await fetchRepo();
//         $("table").append('<tr style="border: black">\n'
//             + '<td>Project</td>\n'
//             + '<td>Repo</td>\n'
//             + '</tr>')
//         res.forEach((item: any) => {
//             console.log(item)
//             $("table").append('<tr style="border: black">'
//                 + '<td>' + item.name + '</td>'
//                 + '<td><a href="' + item.html_url + '">' + item.html_url + '</a></td>'
//                 + '</tr>');
//         });
//     }
//     main();
// }

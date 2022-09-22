//loadProducts => Function
// - Read products data
// - Loop , html append
// - Handle filters before append

// Filters
// cookie
// addEditFilter (mutli, type, value)

//Checkbox onchange

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  initCookie();
  setFilters();

  const filters = document.querySelectorAll('.filter_checkbox');
  filters.forEach((e) => {
    e.addEventListener('change', (event) => {
      const value = e.getAttribute('value');
      const ismulti = e.getAttribute('data-ismulti');
      const filtertype = e.getAttribute('data-filtertype');
      const pricefilter = e.getAttribute('data-filterprice');
      const min = e.getAttribute('min');
      const max = e.getAttribute('max');
      const checked = event.target.checked;

      let filtersCookie = getFiltersCookie();

      // Check if cookie already present
      if (checked) {
        //Add
        if (ismulti) {
          filtersCookie.push({
            type: filtertype,
            value,
          });
        } else {
          const elems = document.querySelectorAll(
            `[data-filtertype="${filtertype}"]`
          );
          filtersCookie.push({
            price: pricefilter,
            value,
          });
          elems.forEach((el) => {
            const v = el.getAttribute('value');
            if (v !== value) {
              el.checked = false;
            }
          });
          filtersCookie = filtersCookie.filter(
            ({ type }) => type !== filtertype
          );
          filtersCookie.push({
            type: filtertype,
            value,
          });
        }
      } else {
        //Remove
        const appliedFilterIndex = filtersCookie.findIndex(
          (a) => a.type === filtertype && a.value === value
        );
        filtersCookie.splice(appliedFilterIndex, 1);
      }
      cookieFunctions.setCookie('filters', JSON.stringify(filtersCookie), 2);
      loadProducts();
    });
  });
});

//  Displaying each items using loop
const loadProducts = () => {
  let productIds = Object.keys(products);
  let mergedproductIds = productIds;
  const listingWrapper = document.querySelector('.products');
  listingWrapper.innerHTML = '';

  let filtersCookie = getFiltersCookie();
  if (filtersCookie.length) {
    const filteredProductIds = filtersCookie.map((a) => {
      if (a.type === 'price') {
        var pricevalue = a.value;
        var low = pricevalue.split('-')[0];
        var high = pricevalue.split('-')[1];
        return {
          type: 'price',
          productIds: productIds.filter((p) => {
            var productPrice = products[p].price;
            if (
              productPrice > low &&
              (high === '*' ? true : productPrice <= high)
            ) {
              return true;
            }
            return false;
          }),
        };
      }
      return {
        type: a.type,
        productIds: productIds.filter((b) => products[b].type === a.value),
      };
      // return productIds.filter((b) => products[b].type === a.value);
    });
    var groupByType = groupBy(filteredProductIds, 'type');
    console.log('filteredProductIds');
    const formattedResponse = Object.keys(groupByType).map((a) => {
      return [].concat.apply(
        [],
        groupByType[a].map(({ productIds }) => productIds)
      );
    });
    console.log('formattedResponse', formattedResponse);
    mergedproductIds = formattedResponse.reduce((a, b) =>
      a.filter((c) => b.includes(c))
    );
    // mergedproductIds = [].concat.apply([], filteredProductIds);
  }
  mergedproductIds.forEach(function (a) {
    var elecObj = products[a];
    var div1 = document.createElement('div');
    div1.classList.add('box');
    div1.setAttribute('id', 'b-one');
    listingWrapper.appendChild(div1);
    var img_wrap = document.createElement('div');
    img_wrap.classList.add('img_wrapper');
    img_wrap.setAttribute('id', 'img_wrapper1');
    div1.appendChild(img_wrap);

    var image = document.createElement('img');
    image.setAttribute('src', elecObj.img);
    img_wrap.appendChild(image);
    image.classList.add('img');

    var pName = document.createElement('p');
    pName.classList.add('pname');
    pName.setAttribute('id', 'pname');
    pName.innerHTML = elecObj.name;
    div1.appendChild(pName);

    var prc = document.createElement('p');
    prc.classList.add('price');
    prc.setAttribute('id', 'price');
    prc.innerHTML = elecObj.price;
    div1.appendChild(prc);
    listingWrapper.appendChild(div1);
  });
};

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const initCookie = () => {
  const filters = cookieFunctions.getCookie('filters');
  if (filters.length) {
  } else {
    cookieFunctions.setCookie('filters', '[]', 2);
  }
};

const getFiltersCookie = () => {
  initCookie();
  return JSON.parse(cookieFunctions.getCookie('filters'));
};

const setFilters = () => {
  const filters = getFiltersCookie();
  filters.forEach((a) => {
    const elem = document.querySelector(
      `[data-filtertype="${a.type}"][value="${a.value}"][pricefilter="${a.pricefilter}]`
    );
    elem.checked = true;
  });
};

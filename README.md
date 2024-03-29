## Ülke Filtreleme Uygulaması - [Live Demo](https://country-filter-application.vercel.app/)

Projeyi oluştururken javascript'in **React** framework'unu kullandık. Proje'nin tasarımını ise **Tailwindcss** kütüphanesiniz kullanarak yaptık. Graphql üzerinden de appolo kütüphanesini kullanarak verileri kendi localimiz çektik.

Projede state yönetimini React Context yapısını kullanarak  yaptık. Context içinde tanımladığımız değişken ve fonksiyonları farklı bileşenler (components) içinde kullandık.

Bu projede girilen para birimine ve seçilen değere göre bir filteleme ve gruplama işlemi yapılıyor.

Sayfa ilk yüklendiğinde veriler gelirken bize bir yükleme(loading) animasyonu gösteriliyor. Veriler yüklendikten sonra animasyon kalkıyor ve yüklenen veriler bize bir tabloda sunuluyor.

![img-1](src/images/1.jpg)

Filtreleme işlemleri yapmak içinde 2 farklı input alanı ve bir tanede secenek (select) alanı oluşturduk. Bu input alanına girilen verilere göre bir filtreleme işlemi yapılacak. Secenek alanında ise seçilen değer göre gruplanmış ve filtrelenmiş veriler gelecek.

Sayfa ilk yüklendiğinde bize 10. eleman seçilmiş olarak gelecek ve arka plan rengi diğer elemanlardan farklı olacaktır. Biz herhangi bir elemana seçtiğimizde seçtiğimiz elemanın arka plan rengi otamatik olarak değişecektir. Sadece bir tane eleman seçebiliyoruz. Birden fazla eleman seçemiyoruz.

Para birimine (Currency Value) göre filtreleme işlemi yaptığımızda filtrelenmiş olan verinin en son elemanı seçilmiş ve arka plan rengi değişmiş olarak gelecek.

- **1. Birinci input(Currency Value):** Bu input alanına herhangi bir ülkenin para birimini girdiğimizde bize para birimine göre filtrelenmiş veriler gelecek. Eğer filtrelenmiş herhangi bir veri yok ise biz hata mesajı gösterilecek.

| ![img-2](src/images/2.jpg) | ![img-3](src/images/3.jpg) |
| -------------------------- | -------------------------- |

- **2. İkinci input(Group Size):** Bu input içine de verileri kaçlı olarak gruplamak istiyorsak ona göre bir number değer giriyoruz. Örneğin **eur** para birimine göre bir filtreleme işlemi yaptığımızı  ve bize 35 tane veri geldiğini varsayalım. Biz bu 35 veriyi üçerli gruplar halinde gruplamak istersek groupSize inputu içine 3 değerini girmemiz yeterli. Girilen 3 değeri sonucunda biz toplam 12 tane üçerli bir gruplama işlemi yapacak ve biz gruplar arasında ileri geri tuşları ile dolaşabileceğiz.

  `return list` butonuna tıkladığımız da bizi bütün verilerin olduğu tabloya yönlendirecek.

| ![img-4](src/images/4.jpg) | ![img-5](src/images/5.jpg) | ![img-6](src/images/6.jpg) |
| -------------------------- | -------------------------- | -------------------------- |

- **3. Secenek Alanı(Select Value):** Bu alanda ise bize verilen secenekler arasından seçtiğimiz değer durumuna göre bize filtreleme gruplama işelemi yapılacak.Filtrelenen değerleri bize altta  gruplanmış şekilde gelecek.

| ![img-7](src/images/7.jpg) | ![img-8](src/images/8.jpg) |
| -------------------------- | -------------------------- |

- Yukarıdaki resimlerde mavi dikdörtgen içinde belirtilen `return list` butonuna tıkladığımız da bizi bütün verilerin olduğu tabloya yönlendirecektir.

#### Api Kaynaklı Hata Mesajı

| ![img-9](src/images/9.jpg) |
| -------------------------- |

Veri çekme işlemi sırasında api'den kaynaklı bir hata meydana geldiğinde bize hata mesaj erkanda gösterilecektir.

### Developer

- Developer - [Musa Sayar]

### İletişim

<p align="center">
<a href="https://www.linkedin.com/in/musasayar/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="musayar9" height="30" width="40" /></a>
<a href="https://github.com/musayar9" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="musayar9" height="30" width="40" /></a>
</p>

# Kişisel Site — KVKK ve Güvenlik Denetimi

Denetim: 6 Kasım 2026
Kapsam: Must7y/muhammetdemir deposundaki Türkçe/İngilizce statik kişisel site.
Yöntem: Güncel GitHub HTML/CSS/JS kaynakları, resmi KVKK kaynakları ve Formspree belgeleri. Canlı siteye HTTP erişimi sağlanamadı; tarayıcı/network ve gerçek form teslim testi yapılmadı. Bu bir hukuki uygunluk sertifikası değildir.

## Doğrulanan teknik durum
- Türkçe ve İngilizce ana sayfalarda iletişim formu mevcut: https://formspree.io/f/mljjvkgq (POST). Alanlar name, email, message; maxlength/required kontrolleri var.
- Form altındaki uzun metin kaldırıldı, sadece gizlilik bildirimi bağlantısı var.
- E-posta adresi mevcut HTML/CSS/JS içinde bulunmuyor. Ancak Git geçmişi veya arama önbelleği eski sürümdeki adresi barındırabilir.
- Kendi site kaynak kodunda reklam/analitik etiketi, çerez yazımı ve localStorage kullanımı saptanmadı. Bu, barındırma sağlayıcısının veya Formspree'nin kendi işlemelerini dışlamaz.
- Google Fonts dış yüklemesi kaldırıldı.
- CSP meta etiketi var; form-action yalnız https://formspree.io alan adına izin veriyor. CSP'nin HTTP yanıt başlığı olarak sunulması ve frame-ancestors gibi başlıklar GitHub Pages'te bu repo içinden kontrol edilemiyor.
- Honeypot _gotcha alanı var; Formspree tarafından desteklendiği resmi belgede belirtiliyor. Sunucu tarafı CAPTCHA ve domain restriction ayarları, Formspree hesabına erişim olmadığından doğrulanamadı.
- Gizlilik/çerez sayfaları Türkçe ve İngilizce yayımlanmış dosyalarda var, formdan erişilebilir.

## Açık noktalar / kesin uyum engelleri
1. **KVKK m.9 yurt dışına aktarım:** Formspree'nin verileri ABD'de işlediği doğrulandı. Kullanıcıya bilgi verilmiş olsa da aktarımın hukuki mekanizması, uygun güvenceler ve varsa sözleşme/bildirim yükümlülükleri doğrulanmadı. Formspree'nin AB/GDPR SCC beyanı Türkiye'nin KVKK m.9 yükümlülüklerini kendiliğinden karşılamaz. Bu konu incelenmeden siteye 'KVKK'ya tamamen uyumlu' denemez. En düşük hukuki risk için doğrulanana kadar form gönderimini durdurmak düşünülebilir.
2. **Formspree proje ayarları:** Formspree Settings > Spam protection içinde reCAPTCHA etkin mi, Project Settings > Restrict to Domain alanına must7y.github.io girilmiş mi kontrol edilmeli. Kontrol yapılana kadar bot korumasının tam olduğu iddia edilmemeli.
3. **Uçtan uca test:** Formu bir kullanıcının bilinçli test mesajıyla denemesi, teslimatın Gmail'e ulaşması, spam engeli, boş alan/doğrulama ve mobil tarayıcı testi gerekir. Bu kontrol yapılmadı.
4. **Gizlilik metni değerlendirmesi:** KVKK m.10 kapsamında işlemeye esas hukuki dayanak, sorumlu iletişim kanalı, saklama süresi, veri işleyen sözleşmeleri ve yurt dışına aktarımın hukuki dayanağı somut olarak netleştirilmeli. Güncel sayfalar bilgilendirme sağlar ancak hukuki incelemenin yerini tutmaz.
5. **Altyapı güvenliği:** GitHub hesabının iki faktörlü doğrulama ve yetkileri, Pages dağıtım/HTTPS durumu, sunucu HTTP güvenlik başlıkları canlı veya panel erişimi olmadan doğrulanmadı.
6. **Kapsam:** Bu denetim Pi-Mo veya BUMBALO mobil uygulamalarının çocuk verileri ve reklam politikalarını kapsamaz.

## Gelecek değişiklik protokolü
- İzleme, reklam, analitik, üçüncü taraf gömme, çerez eklenmeden önce KVKK ve gerekli hallerde GDPR/ePrivacy etkisi değerlendirilir. Zorunlu olmayan çerezler için gerekli koşullarda önceden tercih/rıza mekanizması kurulur.
- Yeni form alanları ihtiyaç kadarla sınırlandırılır; hassas kişisel veri istenmez. Üçüncü taraf servis ve alıcı bilgilerinin güncellenmesi gözden geçirilir.
- GitHub deposuna API anahtarı, hesap şifresi veya gizli bilgi yazılmaz; kaydedilmiş bir form URL'si tek başına gizli anahtar değildir.
- Bot koruması için kullanıcı doğrulamasını sadece tarayıcıya bırakma; servis filtrelerini, limitleri ve domain kısıtlamasını kullan.

## Kaynaklar
- KVKK aydınlatma yükümlülüğü: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
- KVKK yurt dışına aktarım: https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
- KVKK çerez rehberi: https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber
- Formspree güvenlik: https://formspree.io/security/
- Formspree domain restriction: https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain/
- Formspree honeypot: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/

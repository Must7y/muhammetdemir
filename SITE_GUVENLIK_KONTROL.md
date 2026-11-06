# KİŞİSEL SİTE — HUKUKİ VE TEKNİK UYGUNLUK KAYDI

**Denetim tarihi:** 6 Kasım 2026
**Kapsam:** `Must7y/muhammetdemir` reposunun Türkçe/İngilizce statik web sitesi.
**Hukuki sonuç:** **TAM UYGUNLUK ONAYI VERİLMEDİ.** Bu dosya inceleme ve değişiklik kapısıdır; KVKK Kurumu veya avukat onayı değildir.
**Koruyucu karar:** Yurt dışına kişisel veri aktarımı hukuki temeli ve kontrol mekanizmaları tamamlanana kadar iletişim formunun **gönderimi durduruldu**. Alanlar ve düğme pasiftir; formun Formspree action bağlantısı kaldırılmış ve ana sayfalarda `Content-Security-Policy: form-action 'none'` tanımlanmıştır. Formun tasarımı ve kısa gizlilik bağlantısı korunmuştur.
**Dış servis durumu:** Formspree'deki `mljjvkgq` endpoint'i bu repo değişikliğiyle kapatılmış sayılmaz. Formspree hesabına erişim sağlanamadı; oradan da devre dışı bırakma/alan adı kısıtlaması kullanıcı tarafından doğrulanmalıdır.

## Kanıtlanan teknik kontroller
- Hesap, veritabanı, ödeme veya yükleme API'si yok; HTML/CSS/JS statik. Site kaynak kodunda reklam/izleme SDK'sı, analitik, localStorage yazımı veya üçüncü taraf web fontu bulunmadı.
- Form açıkken gönderimi kabul eden `https://formspree.io/f/mljjvkgq` hedefi kullanılmıştı. Kullanıcı kod içinde alıcı e-posta adresini görmüyordu. Bu adres önceki GitHub sürümlerinde yer almış olabilir; geçmişin tamamen silindiği iddia edilemez.
- Önceki aktif form alanları `name`, `email`, `message` ve `_gotcha` idi. HTML `required`/`maxlength` kontrolleri ve honeypot vardı; bunlar sunucu tarafı güvenlik ayarlarının kanıtı değildir.
- Sitede Türkçe ve İngilizce gizlilik sayfası var. Başlıklar numarasızdır, iletişim formunun altında yalnız kısa gizlilik bağlantısı yer alır.
- HTTPS, genel içerik güvenlik politikası ve Formspree gönderiminin canlı ortam doğrulaması yapılamadı: dışarıdan canlı GitHub Pages URL'sine erişim sağlanamadı. Kaynak kodu kontrolleri sorunsuz dağıtım ve tarayıcı davranışının kanıtı değildir.
- Google site verification dosyası ve SEO meta yapılandırmaları korunmuştur.

## Formspree sağlayıcı incelemesi — 6 Kasım 2026
- **Firma:** Formspree, Inc.; form gönderimleri kabul edilip saklanabilir, alıcıya e-posta iletilebilir. Kullanım şartları, formlarda işlenen kişisel veriler için müşteri/site sahibine de sorumluluk yükler.
- **Veri konumu:** Kendi güvenlik sayfasına göre ABD'de Amazon Web Services. Trafik için en az TLS 1.2, saklanan veriler için AES-256 kullandığını bildirir.
- **Güvenlik:** WAF, güvenlik taramaları, erişim sınırlandırması, 2FA ve SOC 2 Type II denetiminden söz ediyor. SOC 2 raporunun kendisi alınmadı; sağlayıcı beyanı bağımsız olarak doğrulanmış rapor gibi değerlendirilmedi.
- **Veri türleri:** İletişim bilgileri ve mesajın yanında IP adresi, tarayıcı tipi, erişim zamanı ve referer gibi teknik bilgiler toplanabileceğini belirtiyor. Sağlayıcı kendi hizmetlerine ilişkin diğer işleme ve üçüncü taraflarla paylaşım türlerini de gizlilik politikasında açıklıyor.
- **GDPR:** Veri işleyen olarak AB standart sözleşmelerini (EU SCC) kullandığını söylüyor; Türkiye'ye özgü KVKK m.9 standart sözleşmesi imzalandığına dair kanıt yok.
- **Saklama:** Ücretsiz hesapta 30 günlük gönderim geçmişi ve aylık 50 gönderim limiti var. Form bildirim e-postaları, yedekler veya teknik kayıtların da kesin 30 günde silindiği doğrulanmadı.
- **Bot:** _gotcha ve reCAPTCHA (ve alan adı kısıtlama) destekleniyor. Formspree hesabındaki reCAPTCHA, `Restrict to Domain` ve bildirim ayarlarına erişilemedi. Kullanıcının hesabında etkin oldukları kanıtlanmış değil.
- **Doğrulanamayanlar:** Hesaba özel sözleşme/DPA, alt işleyenler listesi, KVKK standardı, form verilerinin fiili saklama/silme durumu, hesap ve bildirim adresi, teslimat testi.

## KVKK'ya göre açık konular
1. **KVKK m.9 / yurt dışına aktarım** — ABD'ye düzenli form aktarımı söz konusu olabilir. EU SCC tek başına Türk KVKK'nın standart sözleşmesi değildir. KVK Kurumu'na göre uygun Türk standart sözleşmesinde tarafların yetkili imzaları ve son imzadan itibaren 5 iş günü içinde Kuruma bildirim gibi koşullar vardır. Yeterlilik veya diğer uygun güvence yolları somut olayda ayrıca araştırılmalı. Arızi aktarım istisnası düzenli açık iletişim formunun genel çözümü gibi kullanılmamalı. Bir onay kutusu eklemek problemi kendiliğinden çözmez.
2. **KVKK m.10 / aydınlatma** — Veri sorumlusu kimliği, amaç, alıcı, veri toplama yöntemi, somut hukuki işleme sebebi, haklar ve başvuru süreci güncel teknik işlemlerle bire bir eşleşmeli. 18.02.2026 tarihli 2026/347 sayılı ilke kararında açık rıza ve aydınlatmanın ayrı tutulması vurgulandı; aydınlatma metnini okuma onayı rıza yerine geçmez.
3. **KVKK m.11, m.13 / ilgili kişi hakları** — Sıradan bir iletişim formu hukuken geçerli başvuru yöntemi sayılmayabilir. Başvuru amacına uygun yöntem ve kimlik doğrulama/yanıt süreçleri kurulmalı. Kullanıcı, e-posta adresini sitenin görünen sayfalarında açıklamak istemediği için ayrı ve uygun bir iletişim yöntemi henüz kesinleştirilmedi.
4. **Önceki veriler** — Formun kısa süre açık kaldığı dönemde gönderilmiş olabilecek mesajlar Formspree inbox/spam/over-limit klasörleri ve bildirim adresinde kontrol edilmeli; gerekli silme/erişim hakları yönetilmeli. Mesaj gelmediği varsayılmadı.
5. **VERBİS** — 2025/1572 sayılı karar; ana faaliyeti özel nitelikli veri işleme olmayan ve yıllık çalışan sayısı 50'den az, mali bilanço toplamı 100 milyon TL'den az olan veri sorumlularına kayıt istisnası öngörüyor. Kullanıcının faaliyetinin bu kapsama girip girmediğine ilişkin yeterli bilgi yok. Kayıt istisnası varsa dahi KVKK'nın diğer yükümlülükleri otomatik kalkmaz.
6. **İlgili diğer hukuk** — Site İngilizce de sunuluyor; gerçek hedefleme/faaliyet kapsamında GDPR, ePrivacy ve platform güvenlik yükümlülükleri ayrıca değerlendirilebilir. Yalnız İngilizce sürüm bulunması tek başına AB'yi hedeflediğini kanıtlamaz.
7. **Hesap ve dağıtım** — GitHub hesabının MFA/2FA durumu, şube koruma yetkileri, Formspree proje ayarları ve gerçek sayfa dağıtımı bu denetimde kontrol edilemedi.

## FORM YENİDEN AÇMA KAPISI — tüm maddeler karşılanmadan gönderim etkinleştirilmez
- [ ] Veri aktarımlarının gerçek işleyişi, Formspree'nin sözleşmeleri ve alt işleyenleri doğrulandı.
- [ ] KVKK m.9 bakımından geçerli mekanizma ve gerekiyorsa imzalı Türk standart sözleşmesi / bildirim veya uygun başka hukuki çözüm kayıt altına alındı; gerekirse Türkiye içinde barındırılan başka form altyapısına geçildi.
- [ ] KVKK m.10, m.11 ve m.13'e uygun somut aydınlatma ve veri sahibi başvuru kanalı hazırlandı.
- [ ] Formspree hesabında alan adı kısıtı `must7y.github.io` ve spam/reCAPTCHA ayarları kontrol edildi. reCAPTCHA'nın kendi veri/çerez etkisi de değerlendirildi.
- [ ] Önceki iletiler, saklama/silme, bildirim e-postası ve hesap erişim politikaları incelendi.
- [ ] Gerekli hesap ve altyapı kontrolleri tamamlandı; bilerek gönderilen test iletisi teslim alındı; kullanıcı girişi, mobil görünüm ve spam doğrulandı.
- [ ] Türkçe ve İngilizce gizlilik sayfaları gerçek veri akışını yansıttı, site kodu yeniden denetlendi.
- [ ] Yetkin hukuki inceleme yapılmadan “tam hukuki onay”, “ceza riski sıfır” veya “KVKK sertifikalı” gibi iddialar kullanılmadı.

## Resmî ve birincil kaynaklar
- Formspree Privacy: https://formspree.io/legal/privacy-policy/
- Formspree Terms: https://formspree.io/legal/terms-of-service/
- Formspree Security: https://formspree.io/security/
- Formspree limits: https://help.formspree.io/articles/account-management/account-limits/
- Formspree honeypot: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/
- Formspree domain restriction: https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain/
- Formspree reCAPTCHA: https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings/
- KVKK m.9: https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim
- KVKK standart sözleşme uyarısı: https://www.kvkk.gov.tr/Icerik/8170/Yurt-Disina-Kisisel-Veri-Aktariminda-Kullanilacak-Standart-Sozlesmelerde-Dikkat-Edilmesi-Gereken-Hususlara-Iliskin-Kamuoyu-Duyurusu
- KVKK aydınlatma: https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
- KVKK aydınlatma ve rıza 2026/347: https://www.kvkk.gov.tr/Icerik/8710/veri-sorumlulari-tarafindan-acik-riza-ve-aydinlatma-metinlerinin-ayri-ayri-duzenlenmesi-gerektigi-hakkinda-kisisel-verileri-koruma-kurulunun-18-02-2026-tarihli-ve-2026-347-sayili-ilke-kararina-iliskin-kamuoyu-duyurusu
- KVKK başvuru: https://www.kvkk.gov.tr/Icerik/6938/Kurumumuza-Yapilan-Sikayetlerin-Usul-Sartlarina-Iliskin-Kamuoyu-Duyurusu
- KVKK VERBİS istisnası 2025/1572: https://www.kvkk.gov.tr/Icerik/8577/kisisel-verileri-koruma-kurulunun-04-09-2025-tarihli-ve-2025-1572-sayili-kararinin-uygulama-esaslarina-iliskkin-kamuoyu-duyurusu

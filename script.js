function searchByName() {
    // تحديد المتغيرات
    var input, filter, table, tr, td, i, txtValue;
  
    // الحصول على قيمة المدخل (حقل البحث)
    input = document.getElementById("searchInput");
  
    // تحويل قيمة المدخل إلى أحرف كبيرة
    filter = input.value.toUpperCase();
  
    // الحصول على الجدول وصفوفه
    table = document.getElementById("animalTable");
    tr = table.getElementsByTagName("tr");
  
    // البدء في فحص صفوف الجدول
    for (i = 0; i < tr.length; i++) {
      // الحصول على العنصر الأول (td) في كل صف
      td = tr[i].getElementsByTagName("td")[0];
  
      // التحقق مما إذا كان هناك عنصر (td) في الصف الحالي
      if (td) {
        // الحصول على نص العنصر (td)
        txtValue = td.textContent || td.innerText;
  
        // التحقق مما إذا كانت قيمة البحث موجودة في نص العنصر (td)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          // إذا كانت القيمة موجودة، قم بإظهار الصف
          tr[i].style.display = "";
        } else {
          // إذا لم تكن القيمة موجودة، قم بإخفاء الصف
          tr[i].style.display = "none";
        }
      }
    }
  }
  
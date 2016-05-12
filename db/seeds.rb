require 'csv'

Measurement.destroy_all
rowNum = 0
csv_text = File.read(Rails.root.join('lib', 'seeds', 'measurements.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  if rowNum % 100 === 0
    t = Measurement.new
    t.datetime = row['datetime']
    t.dB = row['dB'].to_f
    t.save
  end
  rowNum += 1
end

Hourly_Average.destroy_all
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

days.each do |day|
  hours.each do |hour|
    Hourly_Average.create(day: day, time: hour, noise: 0, num_measurements: 0)
  end
end

AllMeasurements = Measurement.all

AllMeasurements.each do |m|
  day = days[m.datetime.wday]
  hour = m.datetime.hour
  bin = Hourly_Average.find_by("day = ? AND time = ?", day, hour)
  bin.noise += m.dB
  bin.num_measurements += 1
  bin.save
end

bins = Hourly_Average.all

bins.each do |b|
  b.noise = b.noise / b.num_measurements
  b.save
end
